 <template>
   <div class="displayComp">
        {{ value }}
   </div>
 </template>
 
 <script>
 export default {
  props: ['value']
 }
 </script>
 
 <style>
 .displayComp{
    grid-column: span 4;
    background-color: #0004;
    display: flex;
    justify-content: end;
    align-items: center;
    padding: 20px;
    font-size: 2.1em;
    overflow: hidden;
 }
 </style>