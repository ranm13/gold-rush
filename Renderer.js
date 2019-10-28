class Renderer{
    //Helper function that empties the html that we will render to and render to it using hendelbars
   renderHendelbar(templateId, objToTemplate, appendToPlace) {
    $(appendToPlace).empty()
    const source = $(templateId).html()
    const template = Handlebars.compile(source)
    const newHTML = template(objToTemplate)
    $(appendToPlace).append(newHTML)
    }




    renderBoard(objToTemplate){
        this.renderHendelbar("#game-template", objToTemplate, "#game-container")
        let rows = $('.row')
        let columns = $('.col')
        columns.each(function(){
            $(this).css('width', (95 / (columns.length)*rows.length) + '%')
        })
    }

    renderScores(objToTemplate){
        this.renderHendelbar("#score-template", objToTemplate, "#score-board")
    }
}