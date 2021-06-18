# Foilding

---

<br/>
<br/>

### Basic Usage

:::demo

```html
<template>
	<x-button class="col-layout" @click="show = !show">Click Me</x-button>

	<div class="col-layout" style="height: 210px">
		<x-folding>
			<div v-show="show">
				<div class="transition-box">x-folding-transition</div>
				<div class="transition-box">x-folding-transition</div>
			</div>
		</x-folding>
	</div>
</template>

<script>
	export default {
		data: () => ({
			show: true
		})
	};
</script>

<style>
	.transition-box {
		margin-bottom: 10px;
		width: 200px;
		height: 100px;
		border-radius: 5px;
		background-color: #3f72af;
		text-align: center;
		color: #fff;
		padding: 40px 20px;
		box-sizing: border-box;
	}
</style>
```

:::
