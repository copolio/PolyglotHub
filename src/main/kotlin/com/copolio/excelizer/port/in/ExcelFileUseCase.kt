package com.copolio.excelizer.port.`in`

import com.copolio.excelizer.dto.CreateExcelFile

interface ExcelFileUseCase {
    fun handle(request: CreateExcelFile)
}