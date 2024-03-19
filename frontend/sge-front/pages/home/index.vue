<script setup lang="ts">
const { signOut } = useAuth();
definePageMeta({
    middleware:'auth'
});

const submitLogout = ()=>{
    try{
         signOut({redirect:false}).then(()=>{
            console.log("Deslogado")
            navigateTo("/")
        })
    }catch(Error){
        console.log("Error")
    }
}
</script>

<template>
    <div><h1>
        Minha tela home 
    </h1>
    <Button @click="submitLogout" class="customButton">SAIR</Button>
    </div>
</template>


<style lang="scss">


</style>