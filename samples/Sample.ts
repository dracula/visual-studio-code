// Demonstrates most of TypeScript's syntactic elements to
// validate the colors for comments, keywords, types, strings, and literals.

import { readFile } from "node:fs/promises";
import type { EventEmitter } from "node:events";

/**
 * A vampire that hunts at night.
 */
interface Hunter {
  readonly name: string;
  age: number;
  isAwake(): boolean;
}

type BloodType = "O" | "A" | "B" | "AB";

enum Castle {
  Bran = "Bran",
  Corvin = "Corvin",
}

const MAX_AGE = 1000;
let victims: string[] = [];

abstract class Vampire implements Hunter {
  static readonly rng = Math.random;
  #diary: string[] = [];

  constructor(
    public readonly name: string,
    public age: number,
  ) {}

  abstract hunt(token?: AbortSignal): Promise<string>;

  isAwake(): boolean {
    const hour = new Date().getHours();
    return hour >= 20 || hour < 6;
  }

  get isAncient(): boolean {
    return this.age >= MAX_AGE / 2;
  }

  speak(message = "..."): void {
    console.log(`${this.name} sussurra: "${message}"`);
  }
}

class Dracula extends Vampire {
  private victims: string[] = [];

  async hunt(token?: AbortSignal): Promise<string> {
    await new Promise((resolve) => setTimeout(resolve, 200));

    const victim = Dracula.rng() < 0.5 ? "camponês" : "viajante perdido";
    this.victims.push(victim);

    switch (victim) {
      case "camponês":
        return "Sangue simples, mas satisfatório.";
      case "viajante perdido":
        return "Ah, um forasteiro... delicioso.";
      default:
        throw new Error("Vítima desconhecida");
    }
  }

  *[Symbol.iterator](): Generator<string> {
    for (const v of this.victims) yield v.toUpperCase();
  }
}

function isAncient(vampire: Hunter & { age: number }): boolean {
  return vampire.age >= MAX_AGE / 2;
}

function shuffle<T>(source: readonly T[]): T[] {
  return [...source].sort(() => Math.random() - 0.5);
}

async function main(): Promise<void> {
  const dracula = new Dracula("Vlad", 700);
  const residents = [dracula] as const;

  const ancient = residents.filter((v) => isAncient(v));
  for (const v of ancient) {
    console.log(`${v.name} tem ${v.age} anos.`);
  }

  const { name, age } = dracula;
  console.log(`Desestruturado: ${name} / ${age}`);

  const report = await dracula.hunt();
  console.log(report);

  const raw = `Texto bruto,
    útil para JSON ou templates.`;

  const path = String.raw`C:\Vampires\Transylvania\`;

  try {
    if (dracula.age > 500 && dracula.isAwake()) {
      dracula.speak("A noite é jovem.");
    }
  } catch (ex) {
    console.error(`Erro: ${(ex as Error).message}`);
  } finally {
    console.log("done");
  }

  const square = (n: number): number => n * n;
  console.log(square(9));

  console.log(raw);
  console.log(path);

  // @ts-expect-error demonstrates the theme's error/warning squigglies
  const nomeQueNaoExiste: number = "not a number";
  const unusedVariable = 42;
}

main();
