package com.copolio.excelizer.domain

import org.springframework.data.annotation.Id

class ExcelSource(
    @Id
    val id: Long? = null,
    val type: ExcelSourceType,
    val host: String,
    val username: String,
    val password: String
)