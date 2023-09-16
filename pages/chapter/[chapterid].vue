<template>
    <div class="pt-5 mt-5 container">
      
      <Suspense>
        <template #fallback>
          <ChapterLoading />
        </template>
        <template #default>
          <ChapterReader />
        </template>
      </Suspense>
        
    </div>
</template>
<script setup>
  import ChapterLoading from '~/components/ChapterLoading.vue';
  import ChapterReader from '~/components/ChapterReader.vue';
</script>
