import { Video } from "./video";

export class Playlist {
  private videos: Video[] = [];
  private currentIndex: number = 0;

  add(video: Video): void {
    this.videos.push(video);
  }

  remove(id: string): void {
    this.videos = this.videos.filter(v => v.id !== id);
    if (this.currentIndex >= this.videos.length) {
      this.currentIndex = Math.max(0, this.videos.length - 1);
    }
  }

  hasNext(): boolean {
    return this.currentIndex < this.videos.length - 1;
  }

  hasPrevious(): boolean {
    return this.currentIndex > 0;
  }

  _moveTo(index: number): void {
    if (index >= 0 && index < this.videos.length) {
      this.currentIndex = index;
    }
  }

  _step(delta: number): void {
    const novo = this.currentIndex + delta;
    if (novo >= 0 && novo < this.videos.length) {
      this.currentIndex = novo;
    }
  }

  _getIndex(): number {
    return this.currentIndex;
  }

  get size(): number {
    return this.videos.length;
  }

  get all(): ReadonlyArray<Video> {
    return this.videos;
  }
}
