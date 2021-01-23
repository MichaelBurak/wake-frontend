<template>
  <div style="background-color:#222C3C;" >
    <gb-heading weight="light" tag="h1">Oh A Lot Of Fun At Finnegans Wake
      <gb-icon name="book"></gb-icon>
    </gb-heading>
    <gb-divider color="blue" theme="dark"></gb-divider>
    <gb-avatar size="huge" src="https://cdn.theculturetrip.com/wp-content/uploads/2015/06/screen-shot-2016-09-28-at-4-56-55-pm.png"></gb-avatar>
    <gb-checkbox size="large" description="Activate 'Night Mode' -- more creative text" v-model="checkBox" ></gb-checkbox>
    <gb-textarea size="small" 
    value="bar"
    
    v-model="prefix"
    ></gb-textarea>

  </div>
</template>

<script>
export default {
  name: 'Home',
  methods:{
    // check(){
    //   console.log(`checked is ${this.checkBox}`)
    // }
  },
  data(){
    return {
      checkBox: false,
    prefix: "Make your words tidal to the mascarete here(and there and where you fare)" 
    
}
  }
}
</script>

