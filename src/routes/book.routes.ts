import { Router } from "express";
import { createBook, getAllBooks, getBookById, updateBook, deleteBook } from "../controllers/book.controller";

const router = Router();

router.post("/", createBook);
router.get("/", getAllBooks);
router.get("/:bookId", getBookById);
router.put("/:bookId", updateBook);
router.delete("/:bookId", deleteBook);

const data = [
  {
    "title": "Echoes of a Forgotten War",
    "author": "Linda Chambers",
    "genre": "HISTORY",
    "isbn": "9780316029186",
    "description": "An exploration of political turmoil during a lesser-known revolution.",
    "copies": 7,
    "available": true
  },
  {
    "title": "Quantum Gardens",
    "author": "Henry McMillan",
    "genre": "SCIENCE",
    "isbn": "9780143113241",
    "description": "A journey through the quantum world and its paradoxes.",
    "copies": 3,
    "available": true
  },
  {
    "title": "The Final Archive",
    "author": "Natalie Pierce",
    "genre": "FICTION",
    "isbn": "9780679760801",
    "description": "In a dystopian world, knowledge is both power and punishment.",
    "copies": 6,
    "available": true
  },
  {
    "title": "Tales of the Northern Wind",
    "author": "Caleb Foster",
    "genre": "FANTASY",
    "isbn": "9780553804577",
    "description": "A band of rebels journeys through a frozen realm.",
    "copies": 5,
    "available": true
  },
  {
    "title": "Lives Between the Lines",
    "author": "Emily Donovan",
    "genre": "BIOGRAPHY",
    "isbn": "9781455586691",
    "description": "The inspiring story of a war-time journalist.",
    "copies": 4,
    "available": true
  },
  {
    "title": "Inventing Reality",
    "author": "James Carlton",
    "genre": "NON_FICTION",
    "isbn": "9780345539434",
    "description": "A thought-provoking look at perception and consciousness.",
    "copies": 8,
    "available": true
  },
  {
    "title": "Shadowlight",
    "author": "Tessa Monroe",
    "genre": "FANTASY",
    "isbn": "9780812981605",
    "description": "Magic returns to the world after centuries of silence.",
    "copies": 2,
    "available": true
  },
  {
    "title": "The Time Vault",
    "author": "Marcus Lane",
    "genre": "SCIENCE",
    "isbn": "9780140177390",
    "description": "Time travel is discovered—at a cost.",
    "copies": 9,
    "available": true
  },
  {
    "title": "The Mind's Refuge",
    "author": "Rebecca Song",
    "genre": "NON_FICTION",
    "isbn": "9780670020552",
    "description": "An analysis of mental health systems across the globe.",
    "copies": 5,
    "available": true
  },
  {
    "title": "Of Monarchs and Maps",
    "author": "Stephen Woodbury",
    "genre": "HISTORY",
    "isbn": "9780062316097",
    "description": "Exploring the world through the lens of empire-building.",
    "copies": 3,
    "available": true
  },
  {
    "title": "The Memory Painter",
    "author": "Gwen Ellis",
    "genre": "FICTION",
    "isbn": "9780452288881",
    "description": "A gifted artist begins to paint forgotten lives.",
    "copies": 7,
    "available": true
  },
  {
    "title": "Fragments of Her",
    "author": "Sophia Chan",
    "genre": "BIOGRAPHY",
    "isbn": "9780385529152",
    "description": "A daughter's search through her mother's enigmatic past.",
    "copies": 4,
    "available": true
  },
  {
    "title": "The Celestial Accord",
    "author": "Isaac Harmon",
    "genre": "FANTASY",
    "isbn": "9780307279450",
    "description": "Gods, mortals, and fate entwine in a timeless conflict.",
    "copies": 6,
    "available": true
  },
  {
    "title": "Wonders of the Microcosm",
    "author": "Lara Jennings",
    "genre": "SCIENCE",
    "isbn": "9780393069344",
    "description": "Unveiling the complexity of life at the smallest scale.",
    "copies": 3,
    "available": true
  },
  {
    "title": "Unwritten Chronicles",
    "author": "Noah Green",
    "genre": "FICTION",
    "isbn": "9780312429988",
    "description": "Two strangers' lives intersect across time and space.",
    "copies": 8,
    "available": true
  },
  {
    "title": "Letters from the Edge",
    "author": "Catherine Blake",
    "genre": "NON_FICTION",
    "isbn": "9780060888657",
    "description": "Dispatches from war zones and humanitarian crises.",
    "copies": 2,
    "available": true
  },
  {
    "title": "The Winter Library",
    "author": "Owen Shepard",
    "genre": "FICTION",
    "isbn": "9781594201588",
    "description": "A librarian guards the last archive during the cold apocalypse.",
    "copies": 5,
    "available": true
  },
  {
    "title": "Spirits of the Earth",
    "author": "Amira Noor",
    "genre": "FANTASY",
    "isbn": "9780307594003",
    "description": "Nature awakens in defense against human greed.",
    "copies": 7,
    "available": true
  },
  {
    "title": "The Particle Poets",
    "author": "Raymond Steele",
    "genre": "SCIENCE",
    "isbn": "9780670038601",
    "description": "Scientists who shaped the quantum revolution.",
    "copies": 6,
    "available": true
  },
  {
    "title": "The Silk Code",
    "author": "Jasmine Chow",
    "genre": "BIOGRAPHY",
    "isbn": "9780525555374",
    "description": "A mathematician's double life in Cold War espionage.",
    "copies": 3,
    "available": true
  },
  {
    "title": "The War Ledger",
    "author": "Thomas Whitman",
    "genre": "HISTORY",
    "isbn": "9780307741728",
    "description": "A detailed chronicle of forgotten military campaigns.",
    "copies": 4,
    "available": true
  },
  {
    "title": "A Prism of Truths",
    "author": "Danielle Rivers",
    "genre": "NON_FICTION",
    "isbn": "9780385533135",
    "description": "Essays on the fluidity of truth in modern discourse.",
    "copies": 8,
    "available": true
  },
  {
    "title": "Serpent's Gate",
    "author": "Julian Draxler",
    "genre": "FANTASY",
    "isbn": "9780812973686",
    "description": "A cursed land awaits its last champion.",
    "copies": 5,
    "available": true
  },
  {
    "title": "Blueprints of the Mind",
    "author": "Nina Kapoor",
    "genre": "SCIENCE",
    "isbn": "9780374533557",
    "description": "Neuroscience's search for consciousness.",
    "copies": 9,
    "available": true
  },
  {
    "title": "The Traveler's Code",
    "author": "Ethan Corbett",
    "genre": "FICTION",
    "isbn": "9780525423611",
    "description": "A journal that leads its reader across dimensions.",
    "copies": 5,
    "available": true
  },
  {
    "title": "Between the Pages",
    "author": "Ariana Vance",
    "genre": "BIOGRAPHY",
    "isbn": "9780316204284",
    "description": "The moving tale of a reclusive novelist's rediscovery.",
    "copies": 4,
    "available": true
  },
  {
    "title": "Relics of Reason",
    "author": "Martin O’Donnell",
    "genre": "NON_FICTION",
    "isbn": "9780142000574",
    "description": "A critical look at the evolution of Western logic.",
    "copies": 7,
    "available": true
  },
  {
    "title": "The Painted City",
    "author": "Clara Bell",
    "genre": "FANTASY",
    "isbn": "9780062568120",
    "description": "A girl discovers a hidden world through street murals.",
    "copies": 6,
    "available": true
  },
  {
    "title": "Chronicles of Carbon",
    "author": "Samuel Vega",
    "genre": "SCIENCE",
    "isbn": "9780307594102",
    "description": "The carbon cycle like you've never seen before.",
    "copies": 3,
    "available": true
  }
];

import Book from "../models/book.model";
router.post("/create-books", async (req, res) => {
    await Book.insertMany(data);
});


export default router;