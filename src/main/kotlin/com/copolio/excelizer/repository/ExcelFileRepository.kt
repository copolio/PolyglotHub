//package com.copolio.excelizer.repository
//
//import com.copolio.excelizer.domain.ExcelFile
//import org.springframework.data.repository.reactive.ReactiveCrudRepository
//import reactor.core.publisher.Mono
//
//interface ExcelFileRepository : ReactiveCrudRepository<ExcelFile, Long> {
//    fun findByCondition(condition: String): Mono<ExcelFile>
//}