<style lang="scss">
	#page-router-container {
		position : relative;
		> div {
			position : absolute;
		}
	}
</style>

<template>
	<div>
		<div id="page-router-container">
			<transition
				enter-active-class="animated fadeInUp"
				leave-active-class="animated fadeOutDown"
			>
				<router-view></router-view>
			</transition>
		</div>
	</div>
</template>

<script>
	export default {
		data: function() {
			return {}
		},

		created: function() {

		},

		components: {},

		methods: {}

	}
</script>