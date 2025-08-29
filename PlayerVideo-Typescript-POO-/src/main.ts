import { Playlist } from "./models/playlist";
import { Player } from "./models/player";
import { Video, AdVideo, LiveStream  } from "./models/video";

const v1 = new Video("1", "Introdução a TypeScript", 600, "Canal Dev");
const v2 = new AdVideo("2", "Anúncio - Teclado Mecânico", 15, "Loja X", "Loja X", 3);
const v3 = new Video("3", "POO na prática", 900, "Faculdade Y");
const v4 = new LiveStream("4", "Aula ao vivo de Algoritmos", "Prof. Z", 1200);
const v5 = new Video("5", "Estruturas de Dados", 800, "Canal Dev");

const playlist = new Playlist();
playlist.add(v1);
playlist.add(v2); 
playlist.add(v3);
playlist.add(v4); 
playlist.add(v5);

const player = new Player(playlist);

