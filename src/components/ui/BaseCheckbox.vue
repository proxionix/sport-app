<template>
  <div class="base-checkbox" :class="{ 'is-disabled': disabled }">
    <label class="checkbox-container">
      <input 
        type="checkbox"
        :checked="modelValue"
        :disabled="disabled"
        @change="updateValue"
        ref="checkboxRef"
      />
      <span class="checkmark">
        <FontAwesomeIcon v-if="modelValue" :icon="['fas', 'check']" />
      </span>
      <div v-if="label || $slots.default" class="checkbox-label">
        <span v-if="label">{{ label }}</span>
        <slot></slot>
      </div>
    </label>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'BaseCheckbox',
  
  props: {
    modelValue: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  
  emits: ['update:modelValue', 'change'],
  
  setup(props, { emit }) {
    const checkboxRef = ref(null);
    
    const updateValue = (event) => {
      const isChecked = event.target.checked;
      emit('update:modelValue', isChecked);
      emit('change', isChecked);
    };
    
    return {
      checkboxRef,
      updateValue
    };
  }
};
</script>

<style scoped lang="scss">
.base-checkbox {
  display: inline-block;
  margin-bottom: var(--space-xs);
  
  &.is-disabled {
    opacity: 0.5;
    cursor: not-allowed;
    
    .checkbox-container {
      cursor: not-allowed;
    }
  }
  
  .checkbox-container {
    display: flex;
    align-items: center;
    position: relative;
    cursor: pointer;
    user-select: none;
    
    input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      height: 0;
      width: 0;
      
      &:checked ~ .checkmark {
        background-color: var(--primary-color);
        border-color: var(--primary-color);
      }
      
      &:focus ~ .checkmark {
        box-shadow: 0 0 0 3px rgba(74, 144, 226, 0.3);
      }
      
      &:disabled ~ .checkmark {
        background-color: var(--border-color);
        border-color: var(--border-color);
        cursor: not-allowed;
      }
    }
    
    .checkmark {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 20px;
      width: 20px;
      min-width: 20px;
      background-color: var(--card-bg);
      border: 2px solid var(--border-color);
      border-radius: 4px;
      transition: all 0.2s ease;
      
      .svg-inline--fa {
        font-size: 12px;
        color: white;
      }
    }
    
    &:hover input:not(:disabled) ~ .checkmark {
      background-color: var(--light-bg);
    }
    
    .checkbox-label {
      margin-left: var(--space-sm);
      font-size: var(--font-size-md);
      color: var(--text-color);
    }
  }
}
</style>
