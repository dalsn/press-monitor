<template>
	<div id="map"></div>
</template>
<script>
export default {
	name: 'SimpleMap',
	props: ['locations'],
	mounted() {
		this.simplemaps_countrymap.load();
	},
	computed: {
		simplemaps_countrymap() {
			return window.simplemaps_countrymap;
		}
	},
	watch: {
		locations: {
			handler(newVal) {
				this.simplemaps_countrymap.mapdata.locations = newVal;
	            this.simplemaps_countrymap.refresh();
			},
			deep: true
		}
	}
}
</script>
<style scoped lang="scss">

</style>