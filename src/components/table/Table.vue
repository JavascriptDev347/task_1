<template>
    <div class="table-container ">
        <table class="responsive-table">
            <thead>
                <tr>
                    <th class="sticky-column">№</th>
                    <th v-for="(header, i) in headers" :key="`header${i}`" class="column-header">
                        {{ header.title }}
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in body" :key="item._id || index" class="table-row">
                    <td class="sticky-column">{{ index + 1 }}</td>
                    <td v-for="header in headers" :key="`${header.value}-${item._id}`" class="table-cell">
                        <slot :name="`body_${header.value}`" :item="item">
                            <span class="cell-content">
                                {{ item[header.value] }}
                            </span>
                        </slot>
                    </td>
                </tr>
            </tbody>
        </table>

        <div v-if="!body.length" class="empty-state">
            <span>No data available</span>
        </div>
    </div>

</template>

<script setup lang="ts">

interface TableHeader {
    title: string;
    value: string;
    minWidth?: number;
}

interface TableRow {
    _id?: string;

    [key: string]: any;
}

defineProps<{
    headers: TableHeader[];
    body: TableRow[];
}>();
</script>

<style>
.table-container {
    overflow-x: auto;
    padding-bottom: 0.5rem; 
    position: relative;
    -webkit-overflow-scrolling: touch;
}

.responsive-table {
    width: 100%;
    border-collapse: collapse;
    min-width: 600px; 
}

.column-header {
    padding: 0.75rem 1rem; 
    text-align: left;
    background-color: #f9fafb;
    color: #4b5563; 
    font-weight: 500; 
    white-space: nowrap;
}

.table-row {
    border-top: 1px solid #f3f4f6; 
    transition: background-color 0.2s ease-in-out;
}

.table-row:hover {
    background-color: #f9fafb; 
}

.table-cell {
    padding: 0.75rem 1rem;
    color: #374151;
    vertical-align: top;
    min-width: 150px;
}

.sticky-column {
    background-color: white;
    position: sticky;
    left: 0;
    z-index: 9;
    box-shadow: 2px 0 2px -1px rgba(0, 0, 0, 0.1);
}

.empty-state {
    padding: 1rem;
    text-align: center;
    color: #6b7280; 
}

/* Mobile optimizations */
@media (max-width: 640px) {
    .column-header {
        padding: 0.5rem 0.5rem; 
        font-size: 0.875rem; 
    }

    .table-cell {
        padding: 0.5rem 0.5rem; 
        font-size: 0.875rem; 
        min-width: 120px;
    }

    .cell-content {
        display: block;
        max-width: 160px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .sticky-column {
        font-size: 0.875rem; 
    }
}
</style>
