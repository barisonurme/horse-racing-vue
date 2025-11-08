<template>
    <p class="track-index" :style="{
        backgroundColor: currentHorse?.color || '#18a058',
        color: '#fff'
    }">
        {{ trackIndex }}
    </p>
    <n-flex vertical style="width: 100%;">
        <n-text italic style="margin-bottom: 10px;">{{ currentHorse?.name ?? "Not Generated" }}</n-text>
        <n-slider class="horse-slider-wrapper" v-model:value="currentHorsePosition" :max="currentRound?.distance"
            :step="0.1" :style="{
                display: 'flex',
                alignItems: 'center',
                '--n-fill-color': currentHorse?.color || '#18a058',
                '--n-rail-color': '#d9d9d9'
            }">
            <template #thumb>
                <n-icon-wrapper :size="44" :border-radius="12" :style="{
                    backgroundColor: currentHorse?.color || '#18a058',
                    '--n-color': currentHorse?.color || '#18a058',
                    '--n-icon-color': '#fff'
                }">
                    <div class="horse-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="1.5"
                                d="M14 21c-4.5-5-1.5-8-1.5-8c.924 2.463 4 2 4 2l1.774 1.36a.885.885 0 0 0 1.197-.23l1.327-1.602a1.034 1.034 0 0 0-.068-1.312l-1.282-1.367a4.37 4.37 0 0 1-1.116-2.313C18.17 8.5 17.5 7.5 16.887 6.908L16 6l1-3s-2.576.03-3.5 2C7.5 5.5 3 9.536 3 21" />
                        </svg>
                    </div>
                </n-icon-wrapper>
            </template>
        </n-slider>
    </n-flex>
</template>

<script setup lang="ts">
import { computed, watch, toRef } from 'vue'
import { NSlider, NIconWrapper, NFlex, NText } from 'naive-ui'
import { useStore } from 'vuex'
import { key } from '@/store/store'

const store = useStore(key)

const program = toRef(store.state, 'program')
const currentRound = computed(() => {
    const p = program.value
    if (!p?.rounds) return undefined
    const firstScheduled = p.rounds.find(r => r.status === 'scheduled')
    return p.rounds.find(r => r.status === 'ongoing') || firstScheduled
})

const currentHorse = computed(() => {
    const round = currentRound.value
    if (!round) return undefined
    // for simplicity, we just return the first horse in the positions
    const firstHorseId = round.positions[trackIndex - 1]
    return store.state.horses.find(h => h.id === firstHorseId)
})

const currentHorsePosition = computed({
    get() {
        const round = currentRound.value
        if (!round) return 0
        const firstHorseId = round.positions[trackIndex - 1]
        return firstHorseId ? round.currentHorsePositions[firstHorseId] ?? 0 : 0
    },
    set(value: number) {
        const round = currentRound.value
        if (!round) return
        const firstHorseId = round.positions[trackIndex - 1]
        if (firstHorseId) round.currentHorsePositions[firstHorseId] = value
    }
})



watch(
    currentHorsePosition,
    (horse) => {
        console.log('currentHorsePosition:', horse)
    },
    { immediate: true } // add deep only if you return an object and need nested tracking
)

const { trackIndex } = defineProps<{ trackIndex: number }>()
</script>

<style>
.horse-slider-wrapper {
    pointer-events: none;
    padding-left: 25px;
    padding-right: 25px;
}

.track-index {
    font-weight: bold;
    font-size: 18px;
    text-align: center;
    margin: 0;
    width: 40px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>