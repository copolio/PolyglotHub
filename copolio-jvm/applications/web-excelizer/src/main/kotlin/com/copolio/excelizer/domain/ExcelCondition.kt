package com.copolio.excelizer.domain

class ExcelCondition(
    val id: Long? = null,
    val sourceId: Long,
    val query: String,
    val name: String,
)