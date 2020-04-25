package server.services

import io.micronaut.http.HttpRequest
import io.micronaut.http.client.RxHttpClient
import io.micronaut.http.client.annotation.Client

import javax.inject.Inject
import javax.inject.Singleton

@Singleton
class SearchService {
    @Client('https://api.fantlab.ru/') @Inject RxHttpClient httpClient

    def getAuthor() {
        httpClient.retrieve(HttpRequest.GET('autors'), Map.class)
    }
}
