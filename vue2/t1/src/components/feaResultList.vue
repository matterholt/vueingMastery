<template>
        <div>
            <div class="requestItems requestHead">
                <p>version</p>
                <p>description</p>
                <p>based On</p>
                <p>status</p>
                <p>PIC</p>
            </div>
                <div class="requestItems request" v-for="request in requests" :key="request.cmId">
                <p>{{request.version}}</p>
                <p>{{request.description}}</p>
                <p>{{request.basedOn}}</p>
                <p>{{request.status}}</p>
                <p>{{request.personInCharge}}</p>
            </div>
        </div>
</template>



<script>
    export default{ 
        props:{
            requests:{
                type:Object,
                required:true
            }
        }

    }

</script>

<style>
 .requestItems{ 
     display: grid;
     grid-template-columns: 125px 1fr 150px 75px 100px;
     padding:10px;
     margin:5px;
 }
 .request{ 
     background-color: #575859;
     color:#fff;
    

 }
 .request:nth-child(odd){
     background-color: #444444;
  
 }
 .requestHead{ 
     font-weight: 900;
     text-transform: uppercase;

     color:rgba(0, 0, 0, 0.899);
 }
</style>
