
import { Playlist } from "./playlist";
import { Video } from "./video";

type PlayerState = 'stopped' | 'playing' | 'paused';

export class Player {
  private state: PlayerState = 'stopped';
  private loop: boolean = false;
  private shuffle: boolean = false;
  private shuffleOrder: number[] = [2];
  private shufflePos: number = 0;
  private history: string[] = [];

  constructor(private playlist: Playlist) {}

  setLoop(on: boolean): void {
    this.loop = on;
    console.log(`Loop: ${on ? "ON" : "OFF"}`);
  }


  getHistory(): string[] {
    return [...this.history];
  }
}
