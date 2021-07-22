<template>
<nav class="side-bar">
<!-- <nav class="flex fixed w-30 overflow-y:auto justify-between px-20 h-30 bg-white text-gray-700 border-b border-gray-200 z-10"> -->
      <div class="sidediv ml-5">
        <div class="example">
          <button @click="showbar">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="block transition-colors duration-300 ease-linear stroke-current 
             text-nuxt-gray dark:text-dark-onSurfaceSecondary"  width="24" height="24" fill="none" stroke="currentColor"
              stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
             <line  x1="8" x2="21" y1="6" y2="6">
               </line><line x1="8" x2="21" y1="12" y2="12">
                 </line><line  x1="8" x2="21" y1="18" y2="18">
                   </line><line  x1="3" x2="3" y1="6" y2="6">
                     </line><line  x1="3" x2="3" y1="12" y2="12">
                       </line><line  x1="3" x2="3" y1="18" y2="18"></line>
             </svg>
          </button>
        </div>
       
        <div class="raj"> <!--:style='{"display":bar ? "block" : "none"}'-->
        <div class="mace">
       <button class="mr-2"  @click="close">></button>
         <span>GET STARTED</span>
         </div>
        <div v-if="tog===true">
         <ul>
           <li><nuxt-link to="/Installation">Installation</nuxt-link></li>
           <li> <nuxt-link to="/Routing"> Routing</nuxt-link></li>
           <li> <nuxt-link to="/Directory-Structure "> Directory Structure</nuxt-link></li>
           <li> <nuxt-link to="/Commands-and-Deployment"> Commands and Deployment</nuxt-link></li>
           <li> <nuxt-link to="/Conclusion"> Conclusion</nuxt-link></li>
           <li> <nuxt-link to="/Upgrading"> Upgrading</nuxt-link></li>
         </ul>
        </div>
        <br/>
         <div class="mace">
         <button class="mr-2"  @click="drawer(1)">></button>
         <span>CONCEPTS</span>
         </div>
        <div v-if="toggle(1)===true">
         <ul>
           <li>Views</li>
           <li>context and helpers</li>
           <li>server side rendering</li>
           <li>static site generation</li>
           <li>nuxt life cycle</li>
         </ul>
        </div>
          <br/>
           <div class="mace">
         <button class="mr-2"  @click="drawer(2)">></button>
         <span>FEATURES</span>
           </div>
        <div v-if="toggle(2)===true">
         <ul>
           <li>Rendering</li>
           <li>Deployment Target</li>
           <li>File system routing</li>
           <li>Data Fetching</li>
           <li>Meta tags and seo</li>
           <li>Configuration</li>
            <li>Loading</li>
           <li>Nuxt components</li>
           <li>Transition</li>
           <li>Preview mode</li>
          
         </ul>
        </div>
          <br/>
           <div class="mace">
         <button class="mr-2"  @click="drawer(3)">></button>
         <span>DIRECTORY STRUCTURE</span>
           </div>
        <div v-if="toggle(3)===true">
         <ul>
           <li>.Nuxt</li>
           <li>assets</li>
           <li>components</li>
           <li>content</li>
           <li>dist</li>
           <li>layouts</li>
           <li>middleware</li>
           <li>modules</li>
           <li>pages</li>
           <li>plugins</li>
           <li>static</li>
           <li>store</li>
            <li>nuxt.config</li>
         </ul>
        </div>
           <br/>
            <div class="mace">
         <button class="mr-2"  @click="drawer(4)">></button>
         <span>CONFIGURATION GLOSSARY</span>
            </div>
        <div v-if="toggle(4)===true">
         <ul>
           <li>alias</li>
           <li>build</li>
           <li>buildDir</li>
           <li>cli</li>
           <li>css</li>
           <li>components</li>
           <li>dev</li>
           <li>dir</li>
           <li>env</li>
           <li>extended plugins</li>
           <li>generate</li>
           <li>globalName</li>
           <li>head</li>
           <li>hooks</li>
           <li>ignore</li>
           <li>loading</li>
           <li>loading indicator </li>
           <li>mode</li>
           <li>modern</li>
           <li>modules</li>
           <li>modules Dir</li>
           <li>plugins</li>
           <li>render</li>
           <li>rootDir</li>
           <li>router</li>
           <li>runtime config</li>
           <li>server</li>
           <li>serverMiddleware</li>
           <li>srcDir</li>
           <li>ssr</li>
         </ul>
        </div>
           <br/>
            <div class="mace">
         <button class="mr-2"  @click="drawer(5)">></button>
         <span>INTERNALS GLOSSARY</span>
            </div>
        <div v-if="toggle(5)===true">
         <ul>
           <li>The context </li>
           <li>$nuxt: The nuxt.js helper</li>
           <li>nuxt modules</li>
           <li>nuxt class</li>
           <li>rendered</li>
           <li>modules container</li>
         </ul>
        </div>
            <br/>
             <div class="mace">
         <button class="mr-2"  @click="drawer(6)">></button>
         <span>COMPONENTS GLOSSARY</span>
             </div>
        <div v-if="toggle(6)===true">
         <ul>
           <li>FETCH HOOK</li>
           <li>head method</li>
           <li>key properties</li>
           <li>layout property</li>
           <li>loading property</li>
           <li>middleware property</li>
         </ul>
        </div>
            <br/>
             <div class="mace">
         <button class="mr-2"  @click="drawer(7)">></button>
         <span>DEPLOYMENT</span>
             </div>
        <div v-if="toggle(7)===true">
         <ul>
           <li>AMAZON WEB SERVICES</li>
           <li>azure portal</li>
           <li>bip</li>
           <li>cleavr</li>
           <li>do app platform</li>
           <li>github</li>
         </ul>
        </div>
        </div>
       
        
        <!-- <svg
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          class="w-8 h-8"
        >
          <path d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>  -->
     </div>
    </nav>
</template>
<script>
export default {
 computed:{
  //  toggle()
  //  {
  //    console.log(this.$store.getters.togglesidebar)
  //    return this.$store.getters.togglesidebar
  //  },
   tog()
   {
      return this.$store.getters.tog
   },

  
 },
 data()
 {
   return {
   bar:true, //false 
   visibility: 'hidden'
   }
 },

 
 methods:
 {
    drawer(a)
   {
      //  if (process.client && this.toggle && window.innerWidth < 768) {
      if(this.$store.getters.tog==true)    
      {
        this.close();
      }       
      this.$store.dispatch('toggleSidebar',a)  
      this.$forceUpdate();
      // this.toggle(a)      
  
   },
   close()
   {
      this.$store.dispatch('close')
   },
     toggle(b)
   {
     return this.$store.getters.togglesidebar[b]
   },
   showbar()
   {
     const b=document.querySelector(".side-bar")
     
    //  this.bar=!this.bar 
    if(  document.documentElement.clientHeight <= 650)
    {

    if(this.bar)
    {
        const a=document.querySelector(".raj")
         a.style.visibility="visible";
         b.style.overflow="scroll";
          b.style.height="98%";
           b.style.width="29%";
        //  a.style.width=100
         this.bar=false;
     this.$forceUpdate()
    
    }
    else
    {
      const a=document.querySelector(".raj")
       a.style.visibility="hidden";
       b.style.overflow="hidden";
       b.style.height="10%";
        b.style.width="15%";
      //  a.style.width=20;
       this.bar=true;
       this.$forceUpdate()
     
    }
    }
    else
    {
     
       if(this.bar)
    {
        const a=document.querySelector(".raj")
         a.style.visibility="visible";
         b.style.overflow="scroll";
          b.style.height="98%";
           b.style.width="24%";
        //  a.style.width=100
         this.bar=false;
     this.$forceUpdate()
    
    }
    else
    {
      const a=document.querySelector(".raj")
        a.style.visibility="hidden";
         b.style.overflow="scroll";
          b.style.height="98%";
           b.style.width="24%";
      //  a.style.width=20;
       this.bar=true;
       this.$forceUpdate()
     
    }
    }
   }
 }

    
}
</script>
<style scoped>
.example{
display:none;
}
.raj{
  display:block;
 
}
.side-bar
{
   overflow-y: scroll;
    font-size: 16px;
    background-color: #fff;
    width: 18rem;
    position: fixed;
    z-index: 10;
    margin: 0;
    top: 3.6rem;
    left: 0;
    bottom: 0;
    box-sizing: border-box;
    border-right: 1px solid #eaecef;
}
.mace{
  height:42px;
}
li{
padding:5px;
margin:2px;
border-color: rgb(195, 255, 195)
}
li:hover
{
  color:rgba(13, 199, 13, 0.979)
}
@media only screen and (max-width: 1300px)
{
.raj
{
  visibility:visible;
}
.side-bar
{
  width:24%; 
}
}
@media only screen and (max-width: 1181px)
{
.example{
display:block;
}
.raj
{
 
  /* display:none; */
  /* height:30; */
   visibility:visible;
}
.side-bar{
  margin-top:25px;
  width:24%;
  height:98%;
  
}
}
@media only screen and (max-width: 600px)
{
.example{
display:block;
}
.raj
{
  visibility:hidden;
}
.side-bar{
  margin-top:25px;
  width: 15%; 
  height:10%;
}
}
</style>