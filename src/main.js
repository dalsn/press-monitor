import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import cash from "cash-dom";
import "./assets/tailwind.css";
import "./libs";

window.cash = cash;
window.host = `${process.env.VUE_APP_CCD_HOST}`;
window.portal = `${process.env.VUE_APP_PORTAL_URL}`;

Vue.config.productionTip = false;

// require("datatables.net");

Vue.mixin({
	methods: {
		paginate(c, m) {
			var current = c,
			last = m,
			delta = 2,
			left = current - delta,
			right = current + delta + 1,
			range = [],
			rangeWithDots = [],
			l;

			for (let i = 1; i <= last; i++) {
				if (i == 1 || i == last || i >= left && i < right) {
					range.push(i);
				}
			}

			for (let i of range) {
				if (l) {
					if (i - l === 2) {
						rangeWithDots.push(l + 1);
					} else if (i - l !== 1) {
						rangeWithDots.push('...');
					}
				}
				rangeWithDots.push(i);
				l = i;
			}

			return rangeWithDots;
		}
	}
});

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount("#app");
