<template>
    <div>
        <form>
            <div>
                <label for="name">Name</label>
                <input type="text" v-model="form.name" required>
            </div>
            <div>
                <label for="email">Email</label>
                <input type="email" v-model="form.email" required>
            </div>
            <button type="submit">Create User</button>
        </form>
    </div>
</template>

<script>
import { createUser } from '@/firebase'
import { reactive } from '@vue/reactivity'


export default {
    setup() {
        const form = reactive({ name: '', email: ''})

        const onSubmit = async () => {
            await createUser({ ...form })
            form.name = ''
            form.email = ''
        }

        return {form, onSubmit}
    }
}
</script>