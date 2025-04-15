<template>
  <div 
    class="base-card" 
    :class="[
      `elevation-${elevation}`,
      { 'clickable': clickable, 'hover-effect': hoverEffect }
    ]"
    @click="handleClick"
  >
    <div v-if="$slots.header || title" class="card-header">
      <h3 v-if="title" class="card-title">{{ title }}</h3>
      <slot name="header"></slot>
    </div>
    
    <div class="card-body">
      <slot></slot>
    </div>
    
    <div v-if="$slots.footer" class="card-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseCard',
  
  props: {
    title: {
      type: String,
      default: ''
    },
    elevation: {
      type: Number,
      default: 1,
      validator: value => value >= 0 && value <= 5
    },
    clickable: {
      type: Boolean,
      default: false
    },
    hoverEffect: {
      type: Boolean,
      default: true
    }
  },
  
  emits: ['click'],
  
  setup(props, { emit }) {
    const handleClick = () => {
      if (props.clickable) {
        emit('click');
      }
    };
    
    return {
      handleClick
    };
  }
};
</script>

<style scoped lang="scss">
.base-card {
  background-color: var(--card-bg);
  border-radius: var(--border-radius);
  overflow: hidden;
  transition: box-shadow 0.3s ease, transform 0.3s ease;
  
  &.elevation-0 {
    box-shadow: none;
    border: 1px solid var(--border-color);
  }
  
  &.elevation-1 {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  }
  
  &.elevation-2 {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  &.elevation-3 {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  }
  
  &.elevation-4 {
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
  }
  
  &.elevation-5 {
    box-shadow: 0 16px 32px rgba(0, 0, 0, 0.15);
  }
  
  &.clickable {
    cursor: pointer;
  }
  
  &.hover-effect:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 20px rgba(0, 0, 0, 0.1);
  }
  
  .card-header {
    padding: var(--space-md) var(--space-lg);
    border-bottom: 1px solid var(--border-color);
    
    .card-title {
      margin: 0;
      font-size: var(--font-size-lg);
      font-weight: 600;
    }
  }
  
  .card-body {
    padding: var(--space-lg);
  }
  
  .card-footer {
    padding: var(--space-md) var(--space-lg);
    border-top: 1px solid var(--border-color);
    background-color: rgba(0, 0, 0, 0.02);
  }
}

@media (max-width: 768px) {
  .base-card {
    .card-header, .card-body, .card-footer {
      padding: var(--space-md);
    }
  }
}
</style>
