--- 
title: extract-code案例
date: 2020-01-30
tags: 
 - diary
categories:
 - diary
---

# extract-code

<RecoDemo>
  <template slot="code-template">
    <<< @/docs/.vuepress/components/demo/demo/demo.vue?template
  </template>
  <template slot="code-script">
    <<< @/docs/.vuepress/components/demo/demo/demo.vue?script
  </template>
  <template slot="code-style">
    <<< @/docs/.vuepress/components/demo/demo/demo.vue?style
  </template>
  <demo slot="demo"></demo>
</RecoDemo>