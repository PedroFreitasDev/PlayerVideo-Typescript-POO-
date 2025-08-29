
import type { Playable, Describable } from "./interfaces";

export class Video implements Playable, Describable {
  constructor(
    private _id: string,
    private _titulo: string,
    private _duracaoSegundos: number,
    private _autor: string,
    private _views: number = 0
  ) {}


  private _currentTime: number = 0;

  get id() { return this._id; }
  get titulo() { return this._titulo; }
  get duracaoSegundos() { return this._duracaoSegundos; }
  get autor() { return this._autor; }
  get views() { return this._views; }
  get currentTime() { return this._currentTime; }

  protected addView(): void {
    this._views += 1;
  }

  play(): void {
    this.addView();
    console.log(`[PLAY] ${this.titulo} por ${this.autor} (em ${this._currentTime}s)`);
  }

  pause(): void {
    if (this._currentTime === 0 && this._duracaoSegundos > 0) {
      this._currentTime = Math.floor(this._duracaoSegundos / 2);
    }
    console.log(`[PAUSE] ${this.titulo} em ${this._currentTime}s`);
  }

  stop(): void {
    this._currentTime = 0;
    console.log(`[STOP] ${this.titulo} (voltou ao início)`);
  }

  info(): string {
    return `Video[id=${this.id}] "${this.titulo}" - ${this.duracaoSegundos}s - ${this.autor} - views: ${this.views}`;
  }
}

export class LiveStream extends Video {
  private isLive: boolean = true;
  constructor(
    id: string,
    titulo: string,
    autor: string,
    private concurrentViewers: number
  ) {
    super(id, titulo, 0, autor);
  }

  play(): void {
    if (this.isLive) {
      console.log(`[LIVE] ${this.titulo} AO VIVO para ~${this.concurrentViewers} espectadores.`);
    } else {
      console.log(`[VOD] Replay de ${this.titulo}.`);
    }
  }

  info(): string {
    return this.isLive
      ? `LiveStream "${this.titulo}" (ao vivo, ~${this.concurrentViewers} viewers)`
      : `LiveStream "${this.titulo}" (gravado)`;
  }
}
export class AdVideo extends Video {
  constructor(
    id: string,
    titulo: string,
    duracaoSegundos: number,
    autor: string,
    private anunciante: string,
    private skippableAfterSeconds: number = 5
  ) {
    super(id, titulo, duracaoSegundos, autor);
  }

  play(): void {
    console.log(` ${this.info()} | Anunciante: ${this.anunciante}`);
    console.log(` pode pular apos ${this.skippableAfterSeconds}s... (simulando)`);
    super.play();
  }

  info(): string {
    return `AdVideo "${this.titulo}" (pula apos ${this.skippableAfterSeconds}s)`;
  }
}