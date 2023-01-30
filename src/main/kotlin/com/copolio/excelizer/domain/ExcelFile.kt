package com.copolio.excelizer.domain

import java.time.LocalDateTime

class ExcelFile(
    val fileId: Long,
    val filePath: String,
    val condition: String,
    val createDateTime: LocalDateTime,
    val updateDateTime: LocalDateTime,
    val status: Int
) {
}