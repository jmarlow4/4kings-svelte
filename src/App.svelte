<script>
	import { DeckService } from './services/index.js';
	import { SuitsEnum, CardVals } from './enums/index.js';

	import ColumnsContainer from './components/ColumnsContainer.svelte';
	import CardColumn from './components/CardColumn.svelte';
	import Card from './components/Card.svelte';

	const cardLimit = 52;
  const kingLimit = 4;
  const numCardsToDraw = 2;
	const intervalTime = 1000;
	
	// main();
</script>

<main>
	<ColumnsContainer>
	<CardColumn
		suit="{SuitsEnum.HEARTS.name}"
		symbol="{SuitsEnum.HEARTS.symbol}"
		isRed="{SuitsEnum.HEARTS.isRed}">
	</CardColumn>
	<CardColumn
		suit="{SuitsEnum.CLUBS.name}"
		symbol="{SuitsEnum.CLUBS.symbol}"
		isRed="{SuitsEnum.CLUBS.isRed}">
	</CardColumn>
	<CardColumn
		suit="{SuitsEnum.DIAMONDS.name}"
		symbol="{SuitsEnum.DIAMONDS.symbol}"
		isRed="{SuitsEnum.DIAMONDS.isRed}">
	</CardColumn>
	<CardColumn
		suit="{SuitsEnum.SPADES.name}"
		symbol="{SuitsEnum.SPADES.symbol}"
		isRed="{SuitsEnum.SPADES.isRed}">
	</CardColumn>
</ColumnsContainer>
</main>

<style>

</style>