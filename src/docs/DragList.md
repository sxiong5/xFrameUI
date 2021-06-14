## DragList

:::demo text `text`

```html
<template>
	<x-drag-list v-model="list" class="drag-list">
		<x-drag-item v-for="(item, index) in list" :key="item" :index="index" class="drag-list-item">
			{{item}}
		</x-drag-item>
	</x-drag-list>
</template>

<script>
	export default {
		data: () => ({
			list: ['01', '02', '03', '04', '05']
		})
	};
</script>

<style scoped>
	.drag-list {
		padding: 10px 0;
		text-align: center;
	}
</style>
```

:::
