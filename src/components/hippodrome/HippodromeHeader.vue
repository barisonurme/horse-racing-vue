<template>
    <div class="title-wrapper">
        <div class="title-desc-wrapper">
            <n-h2>Welcome to the GallopIn’sider Hippodrome!</n-h2>
        </div>
        <div class="title-action-buttons">
            <n-button @click="generateProgram" :type="isGenerated ? 'tertiary' : 'primary'" size="large"
                style="margin-right: 10px; ">
                Generate Program
            </n-button>
            <!-- Pause/Resume button -->


            <!-- Start race button -->
            <n-button @click="startRace" :type="!isGenerated ? 'tertiary' : 'primary'" :disabled="!isGenerated">
                {{ isPaused ? 'Start' : 'Pause' }}
            </n-button>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { store } from "@/store/store";
import { NButton, NH2 } from "naive-ui";
import { computed } from "vue";


// Call mutation
const generateProgram = () => {
    store.commit('generateRaceProgram')
}


const isPaused = computed(() => store.state.isPaused);
const isGenerated = computed(() => !!store.state.program?.rounds.length);


const startRace = () => {
    if (isPaused.value)
        store.dispatch('startRace');
    else {
        store.dispatch('togglePause');
    }
};

</script>

<style scoped>
.title-wrapper {
    height: 45px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    width: 100%;
}

.title-desc-wrapper {
    display: flex;
    flex-direction: column;
    align-items: start;
}

.title-action-buttons {
    display: flex;
    flex-direction: row;
    align-items: center;
}
</style>