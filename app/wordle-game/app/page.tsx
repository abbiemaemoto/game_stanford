"use client"

import { useState, useEffect, type KeyboardEvent } from "react"
import { Button } from "@/components/ui/button"
import { AlertCircle, Check } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"

const TARGET_WORD = "dollie"
const MAX_ATTEMPTS = 6
const WORD_LENGTH = 6

export default function WordleGame() {
  const [attempts, setAttempts] = useState<string[]>([])
  const [currentAttempt, setCurrentAttempt] = useState("")
  const [gameStatus, setGameStatus] = useState<"playing" | "won" | "lost">("playing")
  const [showDialog, setShowDialog] = useState(false)
  const [message, setMessage] = useState("")
  const [usedKeys, setUsedKeys] = useState<Record<string, "correct" | "present" | "absent" | undefined>>({})

  const rows = Array(MAX_ATTEMPTS).fill(null)

  const getProdigyPoints = () => {
    if (gameStatus === "won") {
      return 7 - attempts.length // +6 for first attempt, +5 for second, etc.
    }
    return 1 // +1 for completing even if lost
  }

  const handleGameComplete = () => {
    // Navigate back to transition page
    window.location.href = "/game/transition"
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement> | KeyboardEvent) => {
    if (gameStatus !== "playing") return

    if (e.key === "Enter") {
      if (currentAttempt.length !== TARGET_WORD.length) {
        setMessage(`Word must be ${TARGET_WORD.length} letters`)
        setShowDialog(true)
        return
      }

      const newAttempts = [...attempts, currentAttempt]
      setAttempts(newAttempts)

      // Update used keys
      const newUsedKeys = { ...usedKeys }
      for (let i = 0; i < currentAttempt.length; i++) {
        const letter = currentAttempt[i].toLowerCase()
        if (TARGET_WORD[i] === letter) {
          newUsedKeys[letter] = "correct"
        } else if (TARGET_WORD.includes(letter) && newUsedKeys[letter] !== "correct") {
          newUsedKeys[letter] = "present"
        } else if (!newUsedKeys[letter]) {
          newUsedKeys[letter] = "absent"
        }
      }
      setUsedKeys(newUsedKeys)

      if (currentAttempt.toLowerCase() === TARGET_WORD) {
        setGameStatus("won")
        const points = getProdigyPoints()
        setMessage(`Congratulations! You won! You earned +${points} Prodigy Points!`)
        setShowDialog(true)
      } else if (newAttempts.length >= MAX_ATTEMPTS) {
        setGameStatus("lost")
        setMessage(`Game over! The word was "${TARGET_WORD}". You earned +1 Prodigy Point for trying!`)
        setShowDialog(true)
      }

      setCurrentAttempt("")
    } else if (e.key === "Backspace") {
      setCurrentAttempt((prev) => prev.slice(0, -1))
    } else if (/^[a-zA-Z]$/.test(e.key) && currentAttempt.length < TARGET_WORD.length) {
      setCurrentAttempt((prev) => prev + e.key.toLowerCase())
    }
  }

  const handleKeyClick = (key: string) => {
    if (key === "enter") {
      handleKeyDown({ key: "Enter" } as KeyboardEvent)
    } else if (key === "backspace") {
      handleKeyDown({ key: "Backspace" } as KeyboardEvent)
    } else {
      handleKeyDown({ key } as KeyboardEvent)
    }
  }

  const resetGame = () => {
    setAttempts([])
    setCurrentAttempt("")
    setGameStatus("playing")
    setShowDialog(false)
    setUsedKeys({})
  }

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown as any)
    return () => {
      window.removeEventListener("keydown", handleKeyDown as any)
    }
  }, [currentAttempt, attempts, gameStatus])

  const getLetterStatus = (letter: string, index: number, word: string) => {
    letter = letter.toLowerCase()
    if (TARGET_WORD[index] === letter) {
      return "correct"
    } else if (TARGET_WORD.includes(letter)) {
      return "present"
    } else {
      return "absent"
    }
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-4">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-2">Stanford Wordle</h1>
        <p className="text-gray-600">Guess the 6-letter word in 6 tries</p>
      </div>

      <div className="w-full max-w-sm">
        <div className="grid gap-2 mb-6">
          {rows.map((_, rowIndex) => (
            <div key={rowIndex} className="grid grid-cols-6 gap-2">
              {Array(TARGET_WORD.length)
                .fill(null)
                .map((_, colIndex) => {
                  const letter =
                    rowIndex < attempts.length
                      ? attempts[rowIndex][colIndex]
                      : rowIndex === attempts.length && colIndex < currentAttempt.length
                        ? currentAttempt[colIndex]
                        : ""

                  const status =
                    rowIndex < attempts.length ? getLetterStatus(letter, colIndex, attempts[rowIndex]) : undefined

                  return (
                    <div
                      key={colIndex}
                      className={`
                      flex h-12 w-full items-center justify-center rounded border-2 text-xl font-bold uppercase transition-colors
                      ${!letter ? "border-gray-300" : "border-gray-400"}
                      ${status === "correct" ? "bg-green-500 text-white border-green-500" : ""}
                      ${status === "present" ? "bg-yellow-500 text-white border-yellow-500" : ""}
                      ${status === "absent" ? "bg-gray-400 text-white border-gray-400" : ""}
                    `}
                    >
                      {letter}
                    </div>
                  )
                })}
            </div>
          ))}
        </div>

        <div className="mb-6">
          <Keyboard onKeyClick={handleKeyClick} usedKeys={usedKeys} disabled={gameStatus !== "playing"} />
        </div>

        {gameStatus !== "playing" && (
          <div className="space-y-3">
            <Button onClick={resetGame} className="w-full" variant="outline">
              Play Again
            </Button>
            <Button onClick={handleGameComplete} className="w-full bg-red-600 hover:bg-red-700">
              Continue to Next Activity
            </Button>
          </div>
        )}
      </div>

      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              {gameStatus === "won" ? (
                <>
                  <Check className="h-5 w-5 text-green-500" /> You won!
                </>
              ) : gameStatus === "lost" ? (
                <>
                  <AlertCircle className="h-5 w-5 text-red-500" /> Game Over
                </>
              ) : (
                <>
                  <AlertCircle className="h-5 w-5 text-yellow-500" /> Notice
                </>
              )}
            </DialogTitle>
            <DialogDescription>{message}</DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button onClick={() => setShowDialog(false)}>
              {gameStatus !== "playing" ? "Continue" : "OK"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

interface KeyboardProps {
  onKeyClick: (key: string) => void
  usedKeys: Record<string, "correct" | "present" | "absent" | undefined>
  disabled: boolean
}

function Keyboard({ onKeyClick, usedKeys, disabled }: KeyboardProps) {
  const rows = [
    ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
    ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
    ["enter", "z", "x", "c", "v", "b", "n", "m", "backspace"],
  ]

  return (
    <div className="grid gap-2">
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="flex justify-center gap-1">
          {row.map((key) => {
            const status = usedKeys[key]
            const isSpecialKey = key === "enter" || key === "backspace"

            return (
              <button
                key={key}
                onClick={() => onKeyClick(key)}
                disabled={disabled}
                className={`
                  flex h-12 items-center justify-center rounded px-3 font-medium uppercase transition-colors
                  ${isSpecialKey ? "px-4 text-xs" : "px-2 text-sm"}
                  ${disabled ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-200"}
                  ${status === "correct" ? "bg-green-500 text-white" : ""}
                  ${status === "present" ? "bg-yellow-500 text-white" : ""}
                  ${status === "absent" ? "bg-gray-400 text-white" : "bg-gray-100"}
                `}
              >
                {key === "backspace" ? "⌫" : key}
              </button>
            )
          })}
        </div>
      ))}
    </div>
  )
}
