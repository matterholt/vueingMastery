<template>
<div >
    <h1 >Welcome to the form</h1>
    <ThreadList :threads="threads"/>
</div>
</template>

<script>
import sourceData from '@/data'
import ThreadList from './ThreadList'
export default{ 
    components:{ThreadList },
    data(){
        return{ 
            threads:Object.values(sourceData.threads),
            posts: sourceData.posts,
            users: sourceData.users
        }
    }

}


</script>