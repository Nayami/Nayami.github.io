<template>
	<div id="home-router-part">
		<h1>Home component</h1>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid asperiores commodi dolor ea fuga fugiat hic ipsam ipsum iste laboriosam libero necessitatibus neque quidem quis quo, sunt tempore vel, voluptatum?</p>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos modi non quo saepe sint veniam voluptatem. Adipisci animi corporis eius exercitationem laboriosam nemo reiciendis reprehenderit voluptate? Consequuntur dicta exercitationem repellat similique temporibus. Accusantium blanditiis est eveniet fugit nesciunt officia, rerum.</p>

	</div>
</template>

<script>
	import store from '../store'
	export default {

		created: function() {
			store.commit('setTitle', 'Home new title')
		},

	}
</script>