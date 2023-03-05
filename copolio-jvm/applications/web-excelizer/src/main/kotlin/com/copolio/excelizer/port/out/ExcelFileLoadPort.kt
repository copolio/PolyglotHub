package com.copolio.excelizer.port.out

import com.copolio.excelizer.dto.GetExcelFile
import com.copolio.excelizer.dto.GetExcelProgress

interface ExcelFileLoadPort {
    fun handle(getExcelFile: GetExcelFile)
    fun handle(getExcelProgress: GetExcelProgress)
}