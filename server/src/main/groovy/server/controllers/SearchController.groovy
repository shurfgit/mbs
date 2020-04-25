package server.controllers

import io.micronaut.http.MediaType
import io.micronaut.http.annotation.Controller
import io.micronaut.http.annotation.Get
import io.micronaut.http.HttpStatus
import server.services.SearchService

import javax.inject.Inject


@Controller("/search")
class SearchController {

    @Inject SearchService searchService

    @Get(uri = "/", produces = MediaType.APPLICATION_JSON)
    def index() {
        searchService.author
    }
}