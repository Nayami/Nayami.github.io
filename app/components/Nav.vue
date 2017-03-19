<template>
	<div>
		<!--Mobile nav-->
		<div id="mobile-navigator" class="phone-viewport hidden-on-desktop">
			<md-toolbar>
				<md-button class="md-icon-button" @click="toggleLeftSidenav">
					<md-icon>menu</md-icon>
				</md-button>
				<h2 class="md-title">{{$parent.applicationName}}</h2>


				<md-button class="md-icon-button flex-left-auto" @click="toggleRightSidenav">
					<md-icon>view_comfy</md-icon>
				</md-button>

			</md-toolbar>


			<md-sidenav class="md-left" ref="leftSidenav" @open="open('Left')" @close="close('Left')">
				<md-toolbar class="md-account-header">
					<md-list class="md-transparent">
						<md-list-item class="md-avatar-list">
							<md-avatar class="md-large">
								<img src="https://placeimg.com/64/64/people/8" alt="People">
							</md-avatar>

							<span style="flex: 1"></span>

							<md-avatar>
								<img src="https://placeimg.com/40/40/people/3" alt="People">
							</md-avatar>

							<md-avatar>
								<img src="https://placeimg.com/40/40/people/4" alt="People">
							</md-avatar>
						</md-list-item>

						<md-list-item>
							<div class="md-list-text-container">
								<span>John Doe</span>
								<span>johndoe@email.com</span>
							</div>

							<md-button class="md-icon-button md-list-action">
								<md-icon>arrow_drop_down</md-icon>
							</md-button>
						</md-list-item>
					</md-list>
				</md-toolbar>

				<md-list>
					<md-list-item @click="$refs.leftSidenav.toggle()" class="md-primary">
						<router-link class="button" to="/" exact>
							<md-icon>insert_drive_file</md-icon><span>Home Link</span>
						</router-link>
					</md-list-item>

					<md-list-item @click="$refs.leftSidenav.toggle()">
						<router-link class="button" to="/about">
							<md-icon>people</md-icon><span>About Link</span>
						</router-link>
					</md-list-item>
				</md-list>

			</md-sidenav>

			<md-sidenav class="md-right" ref="rightSidenav" @open="open('Right')" @close="close('Right')">
				<md-toolbar>
					<div class="md-toolbar-container">
						<h3 class="md-title">Sidenav content</h3>
					</div>
				</md-toolbar>
				<md-button class="md-raised md-accent" @click="closeRightSidenav">Close</md-button>
			</md-sidenav>
		</div>
		<!--Mobile nav end-->

		<nav id="desktop-nav" class="visible-on-desktop flex-container">
			<div id="desktop-logo" class="flex-col-20">
				<i class="alice-bws"></i>
			</div>
			<div id="desktop-navbar" class="flex-col-80">
				<md-list class="md-dense">

					<md-list-item class="md-primary">
						<router-link class="button" to="/" exact>
							<md-icon>home</md-icon>
							Home Link
						</router-link>
					</md-list-item>

					<md-list-item>
						<router-link class="button" to="/about">
							<md-icon>people</md-icon>
							About Link
						</router-link>
					</md-list-item>

				</md-list>
			</div>
		</nav>





	</div>
</template>

<script>
	import store from '../store'

	export default {

		data: function() {
			return {}
		},

		computed: {},

		methods: {

			toggleLeftSidenav() {
				this.$refs.leftSidenav.toggle();
			},
			toggleRightSidenav() {
				this.$refs.rightSidenav.toggle();
			},
			closeRightSidenav() {
				this.$refs.rightSidenav.close();
			},
			open(ref) {
				console.log('Opened: ' + ref);
			},
			close(ref) {
				console.log('Closed: ' + ref);
			}

		}

	}
</script>