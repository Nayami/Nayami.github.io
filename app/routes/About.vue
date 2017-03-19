<template>
	<div>
		<h1>About component</h1>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus dolore hic inventore molestias, placeat rerum sed tempora veritatis? Cum impedit laudantium odio qui? A consequuntur explicabo fugit, ipsa itaque iure, magni minus natus neque omnis quibusdam, sapiente voluptate? Dicta earum itaque modi perferendis quis reprehenderit! Aliquam aliquid omnis tenetur ullam?</p>
	</div>
</template>

<script>
	import store from '../store'
	export default {

		created: function() {
			store.commit('setTitle', 'About new title')
		},

	}
</script>