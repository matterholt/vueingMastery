<template>
    <div class="vContainer">
        <h2>Request for <br />{{project.model}}</h2>
        <p>{{project.code}}</p>
        <div class="hContainer">
            
            <ul class="vContainer">
                <li v-for="mate in team" :key="mate.userID">{{mate.userName}},{{mate.group}}</li>
            </ul>

             <feaResultList :requests="requests"/>

        </div>


    </div>
</template>

<script>
    import feaRequest from  "@/data/feaRequest"
    import feaResultList from "@/components/feaResultList.vue"

    export default{ 
        components:{ 
            feaResultList
        },

        data(){
            return{
            project: feaRequest.project,
            requests: feaRequest.requests,
            team: feaRequest.teammates
            }
        }

    }
</script>

<style>
 .vContainer{
     display:flex;
     flex-direction: column;
     margin:5px;

 }
 .hContainer{ 
     display:flex;
     flex-direction: row; 
     margin:5px;
 }

</style>