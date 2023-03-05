package com.copolio.excelizer.port.out

import com.copolio.excelizer.dto.CreateExcelFile

interface ExcelFileSavePort {
    fun handle(createExcelFile: CreateExcelFile)
}