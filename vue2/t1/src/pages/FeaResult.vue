<template>
    <div class="vContainer">
        <h2>Request for {{project.model}}</h2>
        <p>{{project.code}}</p>
        <div class="">
            
            <ul class="vContainer">
                <li v-for="mate in team" :key="mate.userID">{{mate.userName}},{{mate.group}}</li>
            </ul>


            <div class="request requestHead">
                <p>version</p>
                <p>description</p>
                <p>basedOn</p>
                <p>status</p>
                <p>personInCharge</p>
            </div>

            <div class="request" v-for="request in requests" :key="request.cmId">
                <p>{{request.version}}</p>
                <p>{{request.description}}</p>
                <p>{{request.basedOn}}</p>
                <p>{{request.status}}</p>
                <p>{{request.personInCharge}}</p>
            </div>

        </div>


    </div>
</template>

<script>
    import feaRequest from  "@/data/feaRequest"

    export default{ 

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
 }
 .hContainer{ 
         display:flex;
     flex-direction: row; 
 }
 .request{ 
     width:75%;
     display: grid;
     grid-template-columns: 125px 1fr 75px 150px 80px;
     padding:2px;
     margin:5px;
 }
 .requestHead{ 
     font-weight: 900;
     text-transform: uppercase;
 }
</style>