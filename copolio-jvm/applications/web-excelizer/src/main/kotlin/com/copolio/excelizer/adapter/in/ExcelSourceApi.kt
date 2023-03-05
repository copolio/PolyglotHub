package com.copolio.excelizer.adapter.`in`

import com.copolio.excelizer.domain.ExcelSourceType
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RestController

@RestController(value = "v1/sources")
class ExcelSourceApi {
    @PostMapping("{sourceType}/hosts/{hostName}")
    fun createExcelSource(
        @PathVariable("sourceType") sourceType: ExcelSourceType,
        @PathVariable("hostName") hostName: String,
    ) {

    }
}