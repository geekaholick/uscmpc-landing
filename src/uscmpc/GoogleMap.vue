<template>
    <div class="google-map-area section" id="support">
        <GmapMap
            :center="{lat:10.2997117, lng:123.8981601}"
            :zoom="18"
            map-type-id="terrain"
        >
        </GmapMap>
    </div>
</template>

<script>
    import Vue from 'vue';
    import * as VueGoogleMaps from 'vue2-google-maps'
    Vue.use(VueGoogleMaps, {
        load: {
            key: 'AIzaSyC6yOYKc6t2GGpAaxSE_QgEN8qB31NogOo',
        },
    
    })
    export default {
        name: 'GoogleMap',
    }
</script>
