<template>
    <datepicker
        v-model="picked"
        :locale="locale"
        :inputFormat="inputFormat"
        :upperLimit="to"
        :lowerLimit="from"
        :clearable="true"/>
</template>

<script>
import { ref, reactive, defineComponent } from 'vue'; 
import datepicker from 'vue3-datepicker';
import { ko } from 'date-fns/locale';
export default defineComponent({
    name: 'App',
    components: {
        datepicker,
    },
    setup() {
        const picked = ref(new Date());
        const locale = reactive(ko);
        const inputFormat = ref('yyyy-MM-dd');

        return {
            picked,
            locale,
            inputFormat,
        }
    }
});
</script>

<style>

</style>