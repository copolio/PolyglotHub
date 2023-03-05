package com.copolio.excelizer.dto

import com.copolio.excelizer.domain.ExcelSourceType

data class CreateSource(
    val type: ExcelSourceType,
    var host: String,
    val username: String,
    val password: String,
)