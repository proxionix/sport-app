<template>
  <div class="progress-chart">
    <div class="chart-header">
      <h3>{{ title }}</h3>
      <div v-if="options.length > 0" class="chart-options">
        <select v-model="selectedOption">
          <option v-for="option in options" :key="option.value" :value="option.value">
            {{ option.label }}
          </option>
        </select>
      </div>
    </div>
    
    <div class="chart-container">
      <canvas ref="chartCanvas"></canvas>
    </div>
    
    <div class="chart-description" v-if="description">
      {{ description }}
    </div>
  </div>
</template>

<script>
import { ref, onMounted, watch, defineComponent } from 'vue';
import Chart from 'chart.js/auto';

export default defineComponent({
  name: 'ProgressChart',
  
  props: {
    title: {
      type: String,
      default: 'Progression'
    },
    description: {
      type: String,
      default: ''
    },
    chartData: {
      type: Object,
      required: true
    },
    chartType: {
      type: String,
      default: 'line',
      validator: (value) => ['line', 'bar', 'radar', 'pie'].includes(value)
    },
    options: {
      type: Array,
      default: () => []
    },
    defaultOption: {
      type: String,
      default: ''
    }
  },
  
  setup(props) {
    const chartCanvas = ref(null);
    const chart = ref(null);
    const selectedOption = ref(props.defaultOption || (props.options.length > 0 ? props.options[0].value : ''));
    
    const createChart = () => {
      if (!chartCanvas.value) return;
      
      // If a chart already exists, destroy it
      if (chart.value) {
        chart.value.destroy();
      }
      
      // Get chart data based on selected option
      const data = selectedOption.value ? 
        props.chartData[selectedOption.value] || props.chartData : 
        props.chartData;
      
      // Set chart colors based on CSS variables
      const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--primary-color').trim() || '#4A90E2';
      const secondaryColor = getComputedStyle(document.documentElement).getPropertyValue('--secondary-color').trim() || '#8E44AD';
      
      // Create the chart
      chart.value = new Chart(chartCanvas.value, {
        type: props.chartType,
        data: data,
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'top',
              labels: {
                boxWidth: 12,
                usePointStyle: true,
                font: {
                  size: 12
                }
              }
            },
            tooltip: {
              mode: 'index',
              intersect: false
            }
          },
          scales: props.chartType === 'line' || props.chartType === 'bar' ? {
            y: {
              beginAtZero: true,
              grid: {
                color: 'rgba(0, 0, 0, 0.05)'
              }
            },
            x: {
              grid: {
                display: false
              }
            }
          } : undefined
        }
      });
    };
    
    onMounted(() => {
      createChart();
    });
    
    // Watch for changes in chart data or selected option
    watch(() => [props.chartData, selectedOption.value], () => {
      createChart();
    }, { deep: true });
    
    return {
      chartCanvas,
      selectedOption
    };
  }
});
</script>

<style scoped lang="scss">
.progress-chart {
  background-color: var(--card-bg);
  border-radius: var(--border-radius);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  padding: var(--space-lg);
  margin-bottom: var(--space-lg);
  
  .chart-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: var(--space-md);
    
    h3 {
      margin: 0;
      font-size: 1.2rem;
      color: var(--text-color);
    }
    
    .chart-options {
      select {
        padding: 0.25rem 0.5rem;
        border-radius: var(--border-radius);
        border: 1px solid var(--border-color);
        background-color: var(--card-bg);
        color: var(--text-color);
        font-size: 0.875rem;
        
        &:focus {
          outline: none;
          border-color: var(--primary-color);
        }
      }
    }
  }
  
  .chart-container {
    position: relative;
    height: 300px;
    width: 100%;
  }
  
  .chart-description {
    margin-top: var(--space-md);
    font-size: 0.875rem;
    color: var(--muted-color);
    text-align: center;
  }
}

@media (max-width: 768px) {
  .progress-chart {
    padding: var(--space-md);
    
    .chart-container {
      height: 250px;
    }
  }
}
</style>
