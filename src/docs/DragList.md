# DragList

---

<br/>
<br/>

### Basic Usage

:::demo The component doesn't contain any css styles other than those required, and the user can customize the styles by setting `class`.

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

<style>
	.drag-list {
		background-color: #f3f3f3;
		border: 1px solid #efefef;
	}
	.drag-list-item {
		background: #fff;
		padding: 15px 10px;
		text-align: left !important;
	}
	.drag-list-item + .drag-list-item {
		border-top: 1px solid #eee;
	}
</style>
```

:::

<br/>
<br/>

### Actived Style

:::demo Set the draggable item's style by prop `active-class`

```html
<template>
	<x-drag-list v-model="list" class="drag-list" active-class="is-active">
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

<style>
	.is-active {
		background: #3f72af;
		color: #fff;
	}
</style>
```

:::

<br/>
<br/>

### Derection

:::demo The default orientation is vertical, you can change it to horizontal by setting `axis` with `x`

```html
<template>
	<x-drag-list v-model="list" class="drag-list-horizontal" axis="x">
		<x-drag-item v-for="(item, index) in list" :key="item" :index="index" class="drag-list-item-horizontal">
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

<style>
	.drag-list-horizontal {
		display: flex;
		flex-flow: row nowrap;
		background-color: #f3f3f3;
		border: 1px solid #efefef;
		width: auto;
	}
	.drag-list-item-horizontal {
		background: #fff;
		padding: 15px 0;
		flex-grow: 1;
	}
	.drag-list-item-horizontal + .drag-list-item-horizontal {
		border-left: 1px solid #eee;
	}
</style>
```

:::

<br/>
<br/>

### Lock Axis

:::demo Using `lock-axis` to constrain the moving of draggable item, default is `false`.

```html
<template>
	<div class="col-layout">
		<x-drag-list v-model="list1" class="drag-list" lock-axis>
			<x-drag-item v-for="(item, index) in list1" :key="item" :index="index" class="drag-list-item">
				{{item}}
			</x-drag-item>
		</x-drag-list>
	</div>

	<div class="col-layout">
		<x-drag-list v-model="list2" class="drag-list-horizontal" axis="x" lock-axis>
			<x-drag-item v-for="(item, index) in list2" :key="item" :index="index" class="drag-list-item-horizontal">
				{{item}}
			</x-drag-item>
		</x-drag-list>
	</div>
</template>

<script>
	export default {
		data: () => ({
			list1: ['01', '02', '03', '04', '05'],
			list2: ['01', '02', '03', '04', '05']
		})
	};
</script>
```

:::

<br/>
<br/>

### DragList Attributes

| Attribute       | Desctiption                         | Type    | Accepted Values | Default Value |
| --------------- | ----------------------------------- | ------- | --------------- | ------------- |
| v-model / value | binding value                       | Array   | --              | --            |
| append-to       | the parent node of drag item        | String  | CSS Selectors   | '#app'        |
| active-class    | the class name of drag item         | String  | --              | --            |
| axis            | the main axis of the drag derection | String  | x / y           | y             |
| lock-axis       | lock the axis                       | Boolean | --              | false         |

<br/>

### DragList Events

| Event Name | Desctiption                      | Parameters   |
| ---------- | -------------------------------- | ------------ |
| change     | triggerd when model value change | value: any[] |
| sort-end   | triggerd at the end of sort      | value: any[] |

<br/>

### DragItem Attributes

| Attribute | Desctiption       | Type   |
| --------- | ----------------- | ------ |
| index     | the index of item | Number |
