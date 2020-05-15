<script>
	import { slide } from 'svelte/transition';

	import { DeckService } from './services/index.js';
	import { SuitsEnum, CardVals } from './enums/index.js';

	import ColumnsContainer from './components/ColumnsContainer.svelte';
	import CardColumn from './components/CardColumn.svelte';
	import Card from './components/Card.svelte';

	const cardLimit = 52;
  const kingLimit = 4;
  const numCardsToDraw = 2;
	const intervalTime = 1000;

	const deckService = new DeckService();
	const cardsData = new Map(
	[
		['HEARTS', [] ],
		['CLUBS', [] ],
		['DIAMONDS', [] ],
		['SPADES', [] ]
	])

	deckService.drawDeck()
      .then( drawDeckResponse => {
				const deckId = drawDeckResponse.deck_id;

        let kingCount = 0;
				let cardCount = 0;
				
        const loopInterval = setInterval( () => {

          // Close it up once "win" condition is achieved
          if (cardCount >= cardLimit || kingCount >= kingLimit) {
            clearInterval(loopInterval);
            alert('Finished!');
          } else {
            deckService.drawCards(deckId, numCardsToDraw)
            .then( drawCardsResponse => {
							const cards = drawCardsResponse.cards
              cards.map( card => {

								// retrieve card value to test against
								const cardValue = CardVals.indexOf(card.value)

								const cardsArrayValues = cardsData.get(card.suit)
									.map(arrCard => CardVals.indexOf(arrCard.value));

								cardsArrayValues.push(cardValue)
								cardsArrayValues.sort( (a, b) => a - b )
								const insertAt = cardsArrayValues.indexOf(cardValue)
								const arrayCopy = cardsData.get(card.suit);
								arrayCopy.splice(insertAt, 0, {suit: card.suit, value: card.value})
								cardsData.set(card.suit, arrayCopy)

                cardCount++;
                if (card.value === 'KING') {
                  kingCount++;
                }
              })
            })
					}
					cardsData = cardsData
        }, intervalTime)
      })
	
</script>

<main>
	<ColumnsContainer>
		{#each [...cardsData] as [key, cards]}
			<CardColumn {...SuitsEnum[key]}>
			{#each cards as card }
				<div transition:slide>
					<Card {...card} />
				</div>
			{/each}
		</CardColumn>
		{/each}
</ColumnsContainer>
</main>