export class DeckService {

  async drawDeck () {
    const res = await fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=0');
    return res.json();
  }

  async drawCards (deckId, numCards) {
    const res = await fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=${numCards}`);
    return res.json();
  }

}