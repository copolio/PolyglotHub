package com.copolio.excelizer.domain

import org.springframework.data.annotation.CreatedDate
import org.springframework.data.annotation.Id
import org.springframework.data.annotation.LastModifiedDate
import java.time.LocalDateTime

class ExcelFile(
    @Id
    val id: Long? = null,
    val filePath: String,
    val conditionId: Long,
    @CreatedDate
    val createDateTime: LocalDateTime,
    @LastModifiedDate
    val updateDateTime: LocalDateTime,
)