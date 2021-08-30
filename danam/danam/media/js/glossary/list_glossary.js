$(document).ready(function () {
    //$('#dtBasicExample').DataTable();
    //$('.dataTables_length').addClass('bs-select');
   $.ajaxSetup({
	cache:false
	});
	const user_name = JSON.parse(document.getElementById('user_name').textContent);
	console.log(user_name);

    function removeAccents(data) {
        if (data.normalize) {
            // Use I18n API if avaiable to split characters and accents, then remove
            // the accents wholesale. Note that we use the original data as well as
            // the new to allow for searching of either form.
            return data + ' ' + data
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '');
        }

        return data;
    }

    var searchType = jQuery.fn.DataTable.ext.type.search;

    searchType.string = function (data) {
        return !data ?
        '' :
        typeof data === 'string' ?
        removeAccents(data) :
        data;
    };

    searchType.html = function (data) {
        return !data ?
        '' :
        typeof data === 'string' ?
        removeAccents(data.replace(/<.*?>/g, '')) :
        data;
    };

    $.ajax({
        type: "GET",
        url: "/glossary/list/",
        //data: { get_param: 'value' },
        dataType: 'json',
        cache: false,
        success: function (data) {
            //alert(data)
            //var txt = JSON.stringify(data);
			//alert(data.length);
            //var text = '{"results": {"bindings": [{"label": {"type": "literal", "value": "Ghanbaha  3", "xml:lang": "EN"}, "definition": {"type": "literal", "value": "<div><dl class=\\"dl-horizontal\\" data-bind=\\"css: {\'provisional\': ko.unwrap(tile.provisionaledits) !== null &amp;&amp; tile.userisreviewer === false}\\"><dd data-bind=\\"html: value() || \'None\'\\"><div>\xe0\xa4\x98\xe0\xa4\xa8 \xe0\xa4\xac\xe0\xa4\xbe\xe0\xa4\xb9\xe0\xa4\xbe\xe0\xa4\x83 (LAL2330) \xe0\xa4\xa8\xe0\xa4\xbe\xe0\xa4\xae \xe0\xa4\x97\xe0\xa4\xb0\xe0\xa5\x87\xe0\xa4\x95\xe0\xa5\x8b \\n\xe0\xa4\xb8\xe0\xa4\xbe\xe0\xa4\xa8\xe0\xa5\x8b \xe0\xa4\x9a\xe0\xa5\x8b\xe0\xa4\x95\xe0\xa4\xae\xe0\xa4\xbe \xe0\xa4\x85\xe0\xa4\xb5\xe0\xa4\xb8\xe0\xa5\x8d\xe0\xa4\xa5\xe0\xa4\xbf\xe0\xa4\xa4 \xe0\xa4\xaf\xe0\xa5\x8b \xe0\xa4\xab\xe0\xa4\xb2\xe0\xa5\x8d\xe0\xa4\x9a\xe0\xa4\xbe\xe0\xa4\xb2\xe0\xa4\xbe\xe0\xa4\x88 \xe0\xa4\xb5\xe0\xa4\x9c\xe0\xa5\x8d\xe0\xa4\xb0\xe0\xa4\xa7\xe0\xa4\xb0 \xe0\xa4\xab\xe0\xa4\xb2\xe0\xa5\x8d\xe0\xa4\x9a\xe0\xa4\xbe \xe0\xa4\xaa\xe0\xa4\xa8\xe0\xa4\xbf \xe0\xa4\xad\xe0\xa4\xa8\xe0\xa4\xbf\xe0\xa4\xa8\xe0\xa5\x8d\xe0\xa4\x9b \xe0\xa5\xa4\xe0\xa4\x85\xe0\xa4\x95\xe0\xa5\x8d\xe0\xa4\xb7\xe0\xa5\x8b\xe0\xa4\xad\xe0\xa5\x8d\xe0\xa4\xaf \xe0\xa4\xac\xe0\xa5\x81\xe0\xa4\xa6\xe0\xa5\x8d\xe0\xa4\xa7\xe0\xa4\x95\xe0\xa5\x8b\\n \xe0\xa4\xae\xe0\xa5\x82\xe0\xa4\xb0\xe0\xa5\x8d\xe0\xa4\xa4\xe0\xa4\xbf \xe0\xa4\xb8\xe0\xa5\x8d\xe0\xa4\xa5\xe0\xa4\xbe\xe0\xa4\xaa\xe0\xa4\xa8\xe0\xa4\xbe \xe0\xa4\x97\xe0\xa4\xb0\xe0\xa4\xbf\xe0\xa4\x8f\xe0\xa4\x95\xe0\xa5\x8b \xe0\xa4\xaf\xe0\xa4\xb8 \xe0\xa4\xac\xe0\xa4\xbe\xe0\xa4\xb9\xe0\xa4\xbe\xe0\xa4\x83\xe0\xa4\xae\xe0\xa4\xbe \xe0\xa4\xa6\xe0\xa5\x81\xe0\xa4\x88\xe0\xa4\xb5\xe0\xa4\x9f\xe0\xa4\xbe \xe0\xa4\xab\xe0\xa4\xb2\xe0\xa5\x8d\xe0\xa4\x9a\xe0\xa4\xbe\xe0\xa4\xb9\xe0\xa4\xb0\xe0\xa5\x82 \xe0\xa4\x9b\xe0\xa4\xa8\xe0\xa5\x8d \xe0\xa5\xa4 \\n\xe0\xa4\xa6\xe0\xa4\x95\xe0\xa5\x8d\xe0\xa4\xb7\xe0\xa4\xbf\xe0\xa4\xa3-\xe0\xa4\xaa\xe0\xa5\x82\xe0\xa4\xb0\xe0\xa5\x8d\xe0\xa4\xb5\xe0\xa4\xa4\xe0\xa4\xbf\xe0\xa4\xb0\xe0\xa4\x95\xe0\xa5\x8b&nbsp;LAL4092 \xe0\xa4\xb0 \xe0\xa4\x89\xe0\xa4\xa4\xe0\xa5\x8d\xe0\xa4\xa4\xe0\xa4\xb0-\xe0\xa4\xaa\xe0\xa4\xb6\xe0\xa5\x8d\xe0\xa4\x9a\xe0\xa4\xbf\xe0\xa4\xae\xe0\xa4\xa4\xe0\xa4\xb0\xe0\xa5\x8d\xe0\xa4\xab\xe0\xa4\x95\xe0\xa5\x8b LAL4093 \xe0\xa5\xa4</div>\\n\\n<div>\xe0\xa4\x95\xe0\xa5\x87\xe0\xa4\xb9\xe0\xa4\xbf \xe0\xa4\xb8\xe0\xa4\xae\xe0\xa4\xaf \xe0\xa4\x85\xe0\xa4\x97\xe0\xa4\xbe\xe0\xa4\xa1\xe0\xa4\xbf\xe0\xa4\xb8\xe0\xa4\xae\xe0\xa5\x8d\xe0\xa4\xae \xe0\xa4\xaf\xe0\xa4\xb8 \xe0\xa4\xab\xe0\xa4\xb2\xe0\xa5\x8d\xe0\xa4\x9a\xe0\xa4\xbe\xe0\xa4\xae\xe0\xa4\xbe \xe0\xa4\xb5\xe0\xa4\x9c\xe0\xa5\x8d\xe0\xa4\xb0\xe0\xa4\xa7\xe0\xa4\xb0\xe0\xa4\x95\xe0\xa5\x8b \xe0\xa4\xae\xe0\xa5\x82\xe0\xa4\xb0\xe0\xa5\x8d\xe0\xa4\xa4\xe0\xa4\xbf \xe0\xa4\xb0\xe0\xa4\xb9\xe0\xa5\x87\xe0\xa4\x95\xe0\xa5\x8b \xe0\xa4\x95\xe0\xa5\x81\xe0\xa4\xb0\xe0\xa4\xbe \xe0\xa4\xb8\xe0\xa5\x8d\xe0\xa4\xa5\xe0\xa4\xbe\xe0\xa4\xa8\xe0\xa5\x80\xe0\xa4\xaf\xe0\xa4\xb9\xe0\xa4\xb0\xe0\xa5\x82 \xe0\xa4\xac\xe0\xa4\xa4\xe0\xa4\xbe\xe0\xa4\x89\xe0\xa4\x9b\xe0\xa4\xa8\xe0\xa5\x8d \xe0\xa5\xa4 \xe0\xa4\xb9\xe0\xa4\xbe\xe0\xa4\xb2 \xe0\xa4\x89\xe0\xa4\x95\xe0\xa5\x8d\xe0\xa4\xa4 \xe0\xa4\xae\xe0\xa5\x82\xe0\xa4\xb0\xe0\xa5\x8d\xe0\xa4\xa4\xe0\xa4\xbf\xe0\xa4\x95\xe0\xa5\x8b \xe0\xa4\xaa\xe0\xa4\xbe\xe0\xa4\xa6\xe0\xa4\xb6\xe0\xa4\xbf\xe0\xa4\xb2\xe0\xa4\xbe\xe0\xa4\xae\xe0\xa4\xbe\xe0\xa4\xa4\xe0\xa5\x8d\xe0\xa4\xb0 \xe0\xa4\xac\xe0\xa4\xbe\xe0\xa4\x81\xe0\xa4\x95\xe0\xa5\x80 \xe0\xa4\x9b \xe0\xa5\xa4 <a href=\\"https://www.zotero.org/groups/2247442/nhdp-bibliography/items/itemKey/5A9SNX3X/q/locke\\" target=\\"_blank\\">\xe0\xa4\x9c\xe0\xa5\x8b\xe0\xa4\xa8\xe0\xa5\x8d \xe0\xa4\xb2\xe0\xa4\x95\xe0\xa5\x8d</a>\\n (\xe0\xa5\xa7\xe0\xa5\xaf\xe0\xa5\xae\xe0\xa5\xab, \xe0\xa5\xa7\xe0\xa5\xa7\xe0\xa5\xa8) \xe0\xa4\xb2\xe0\xa5\x87 \xe0\xa4\xaf\xe0\xa5\x8b \xe0\xa4\xab\xe0\xa4\xb2\xe0\xa5\x8d\xe0\xa4\x9a\xe0\xa4\xbe \xe0\xa4\xae\xe0\xa5\x82\xe0\xa4\xb0\xe0\xa5\x8d\xe0\xa4\xa4\xe0\xa4\xbf\xe0\xa4\xb5\xe0\xa4\xbf\xe0\xa4\xb9\xe0\xa4\xbf\xe0\xa4\xa8 \xe0\xa4\xb0\xe0\xa4\xb9\xe0\xa5\x87\xe0\xa4\x95\xe0\xa5\x8b \xe0\xa4\xac\xe0\xa4\xa4\xe0\xa4\xbe\xe0\xa4\x8f\xe0\xa4\x95\xe0\xa4\xbe \xe0\xa4\x9b\xe0\xa4\xa8\xe0\xa5\x8d \xe0\xa5\xa4 \xe0\xa4\xb8\xe0\xa4\xae\xe0\xa5\x8d\xe0\xa4\xad\xe0\xa4\xb5\xe0\xa4\xa4\xe0\xa4\x83 \xe0\xa4\xb8\xe0\xa5\x8b \\n\xe0\xa4\xae\xe0\xa5\x82\xe0\xa4\xb0\xe0\xa5\x8d\xe0\xa4\xa4\xe0\xa4\xbf \xe0\xa4\xb8\xe0\xa4\xa8\xe0\xa5\x8d \xe0\xa5\xa7\xe0\xa5\xaf\xe0\xa5\xae\xe0\xa5\xab \xe0\xa4\xaa\xe0\xa5\x82\xe0\xa4\xb0\xe0\xa5\x8d\xe0\xa4\xb5 \xe0\xa4\x9a\xe0\xa5\x8b\xe0\xa4\xb0\xe0\xa4\xbf\xe0\xa4\x8f\xe0\xa4\x95\xe0\xa5\x8b \xe0\xa4\xb9\xe0\xa5\x81\xe0\xa4\xa8\xe0\xa5\x81\xe0\xa4\xaa\xe0\xa4\xb0\xe0\xa5\x8d\xe0\xa4\xa6\xe0\xa4\x9b \xe0\xa5\xa4 \xe0\xa4\xaa\xe0\xa4\xbe\xe0\xa4\xa6\xe0\xa4\xb6\xe0\xa4\xbf\xe0\xa4\xb2\xe0\xa4\xbe\xe0\xa4\x95\xe0\xa5\x8b \xe0\xa4\xaa\xe0\xa5\x80\xe0\xa4\xa0\xe0\xa4\xad\xe0\xa4\xbe\xe0\xa4\x97\xe0\xa4\xae\xe0\xa4\xbe \xe0\xa4\xb8\xe0\xa4\x82\xe0\xa4\xb8\xe0\xa5\x8d\xe0\xa4\x95\xe0\xa5\x83\xe0\xa4\xa4 \\n\xe0\xa4\xad\xe0\xa4\xbe\xe0\xa4\xb7\xe0\xa4\xbe\xe0\xa4\xae\xe0\xa4\xbe \xe0\xa4\xb2\xe0\xa5\x87\xe0\xa4\x96\xe0\xa4\xbf\xe0\xa4\x8f\xe0\xa4\x95\xe0\xa5\x8b \xe0\xa4\xa4\xe0\xa5\x80\xe0\xa4\xa8 \xe0\xa4\xaa\xe0\xa4\x99\xe0\xa5\x8d\xe0\xa4\x95\xe0\xa5\x8d\xe0\xa4\xa4\xe0\xa4\xbf\xe0\xa4\x95\xe0\xa5\x8b \xe0\xa4\x85\xe0\xa4\xad\xe0\xa4\xbf\xe0\xa4\xb2\xe0\xa5\x87\xe0\xa4\x96 \xe0\xa4\x9b \xe0\xa5\xa4 \xe0\xa4\xaf\xe0\xa5\x8b \xe0\xa4\xab\xe0\xa4\xb2\xe0\xa5\x8d\xe0\xa4\x9a\xe0\xa4\xbe\xe0\xa4\x95\xe0\xa5\x8b \xe0\xa4\x85\xe0\xa4\xb5\xe0\xa4\xb8\xe0\xa5\x8d\xe0\xa4\xa5\xe0\xa4\xbe \xe0\xa4\xb8\xe0\xa4\xbe\xe0\xa4\xb9\xe0\xa5\x8d\xe0\xa4\xb0\xe0\xa5\x88 \xe0\xa4\xa8\xe0\xa4\xbe\xe0\xa4\x9c\xe0\xa5\x81\xe0\xa4\x95 \xe0\xa4\x9b\\n \xe0\xa5\xa4 &nbsp;\xe0\xa4\xb9\xe0\xa4\xbe\xe0\xa4\xb2 \xe0\xa4\xaf\xe0\xa4\xb9\xe0\xa4\xbe\xe0\xa4\x81 \xe0\xa4\xa8\xe0\xa4\x9c\xe0\xa4\xbf\xe0\xa4\x95\xe0\xa5\x88\xe0\xa4\x95\xe0\xa5\x8b \xe0\xa4\x98\xe0\xa4\xb0 \xe0\xa4\xac\xe0\xa4\xa8\xe0\xa4\xbe\xe0\xa4\x89\xe0\xa4\xa8 \xe0\xa4\xaa\xe0\xa5\x8d\xe0\xa4\xb0\xe0\xa4\xaf\xe0\xa5\x8b\xe0\xa4\x97 \xe0\xa4\xad\xe0\xa4\x8f\xe0\xa4\x95\xe0\xa5\x8b \xe0\xa4\xa8\xe0\xa4\xbf\xe0\xa4\xb0\xe0\xa5\x8d\xe0\xa4\xae\xe0\xa4\xbe\xe0\xa4\xa3-\xe0\xa4\xb8\xe0\xa4\xbe\xe0\xa4\xae\xe0\xa4\x97\xe0\xa5\x8d\xe0\xa4\xb0\xe0\xa5\x80\xe0\xa4\xb9\xe0\xa4\xb0\xe0\xa5\x82 \xe0\xa4\xa5\xe0\xa5\x81\xe0\xa4\xaa\xe0\xa4\xbe\xe0\xa4\xb0\xe0\xa4\xbf\xe0\xa4\x8f\xe0\xa4\x95\xe0\xa5\x8b \xe0\xa4\x9b\\n \xe0\xa5\xa4</div>\\n</dd></dl></div>", "xml:lang": "EN"}, "altlabel": {"type": "literal", "value": "\xe0\xa4\x98\xe0\xa4\xa8 \xe0\xa4\xac\xe0\xa4\xbe\xe0\xa4\xb9\xe0\xa4\xbe\xe0\xa4\x83 ", "xml:lang": "NP"}}, {"label": {"type": "literal", "value": "Bekh\xc4\x81r\xc4\x81ja B\xc4\x81h\xc4\x81\xe1\xb8\xa5 mmm5", "xml:lang": "EN"}, "definition": {"type": "literal", "value": "<div><div style=\\"color: #d4d4d4;background-color: #1e1e1e;font-family: Consolas, \'Courier New\', monospace;font-weight: normal;font-size: 14px;line-height: 19px;white-space: pre;\\"><div><span style=\\"color: #d4d4d4;\\">&nbsp;g&nbsp;=&nbsp;Graph()</span></div><div><span style=\\"color: #d4d4d4;\\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;source_file&nbsp;=&nbsp;</span><span style=\\"color: #ce9178;\\">\\"gloassary/static/skos/danam_glossary.skos\\"</span></div><div><span style=\\"color: #d4d4d4;\\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;g.parse(source_file,&nbsp;</span><span style=\\"color: #9cdcfe;\\">format</span><span style=\\"color: #d4d4d4;\\">=</span><span style=\\"color: #ce9178;\\">\\"application/rdf+xml\\"</span><span style=\\"color: #d4d4d4;\\">)</span></div><div><span style=\\"color: #d4d4d4;\\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;skos=&nbsp;Namespace(</span><span style=\\"color: #ce9178;\\">\\"http://www.w3.org/2004/02/skos/core#\\"</span><span style=\\"color: #d4d4d4;\\">)</span></div><div><span style=\\"color: #d4d4d4;\\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <br></span></div></div></div>", "xml:lang": "EN"}, "altlabel": {"type": "literal", "value": "\xe0\xa4\xac\xe0\xa5\x87\xe0\xa4\x96\xe0\xa4\xbe\xe0\xa4\xb0\xe0\xa4\xbe\xe0\xa4\x9c \xe0\xa4\xac\xe0\xa4\xbe\xe0\xa4\xb9\xe0\xa4\xbe:mmm", "xml:lang": "NP"}}, {"label": {"type": "literal", "value": "Ghanbaha  4", "xml:lang": "EN"}, "definition": {"type": "literal", "value": "<div><dl class=\\"dl-horizontal\\" data-bind=\\"css: {\'provisional\': ko.unwrap(tile.provisionaledits) !== null &amp;&amp; tile.userisreviewer === false}\\"><dd data-bind=\\"html: value() || \'None\'\\"><div>\xe0\xa4\x98\xe0\xa4\xa8 \xe0\xa4\xac\xe0\xa4\xbe\xe0\xa4\xb9\xe0\xa4\xbe\xe0\xa4\x83 (LAL2330) \xe0\xa4\xa8\xe0\xa4\xbe\xe0\xa4\xae \xe0\xa4\x97\xe0\xa4\xb0\xe0\xa5\x87\xe0\xa4\x95\xe0\xa5\x8b \\n\xe0\xa4\xb8\xe0\xa4\xbe\xe0\xa4\xa8\xe0\xa5\x8b \xe0\xa4\x9a\xe0\xa5\x8b\xe0\xa4\x95\xe0\xa4\xae\xe0\xa4\xbe \xe0\xa4\x85\xe0\xa4\xb5\xe0\xa4\xb8\xe0\xa5\x8d\xe0\xa4\xa5\xe0\xa4\xbf\xe0\xa4\xa4 \xe0\xa4\xaf\xe0\xa5\x8b \xe0\xa4\xab\xe0\xa4\xb2\xe0\xa5\x8d\xe0\xa4\x9a\xe0\xa4\xbe\xe0\xa4\xb2\xe0\xa4\xbe\xe0\xa4\x88 \xe0\xa4\xb5\xe0\xa4\x9c\xe0\xa5\x8d\xe0\xa4\xb0\xe0\xa4\xa7\xe0\xa4\xb0 \xe0\xa4\xab\xe0\xa4\xb2\xe0\xa5\x8d\xe0\xa4\x9a\xe0\xa4\xbe \xe0\xa4\xaa\xe0\xa4\xa8\xe0\xa4\xbf \xe0\xa4\xad\xe0\xa4\xa8\xe0\xa4\xbf\xe0\xa4\xa8\xe0\xa5\x8d\xe0\xa4\x9b \xe0\xa5\xa4\xe0\xa4\x85\xe0\xa4\x95\xe0\xa5\x8d\xe0\xa4\xb7\xe0\xa5\x8b\xe0\xa4\xad\xe0\xa5\x8d\xe0\xa4\xaf \xe0\xa4\xac\xe0\xa5\x81\xe0\xa4\xa6\xe0\xa5\x8d\xe0\xa4\xa7\xe0\xa4\x95\xe0\xa5\x8b\\n \xe0\xa4\xae\xe0\xa5\x82\xe0\xa4\xb0\xe0\xa5\x8d\xe0\xa4\xa4\xe0\xa4\xbf \xe0\xa4\xb8\xe0\xa5\x8d\xe0\xa4\xa5\xe0\xa4\xbe\xe0\xa4\xaa\xe0\xa4\xa8\xe0\xa4\xbe \xe0\xa4\x97\xe0\xa4\xb0\xe0\xa4\xbf\xe0\xa4\x8f\xe0\xa4\x95\xe0\xa5\x8b \xe0\xa4\xaf\xe0\xa4\xb8 \xe0\xa4\xac\xe0\xa4\xbe\xe0\xa4\xb9\xe0\xa4\xbe\xe0\xa4\x83\xe0\xa4\xae\xe0\xa4\xbe \xe0\xa4\xa6\xe0\xa5\x81\xe0\xa4\x88\xe0\xa4\xb5\xe0\xa4\x9f\xe0\xa4\xbe \xe0\xa4\xab\xe0\xa4\xb2\xe0\xa5\x8d\xe0\xa4\x9a\xe0\xa4\xbe\xe0\xa4\xb9\xe0\xa4\xb0\xe0\xa5\x82 \xe0\xa4\x9b\xe0\xa4\xa8\xe0\xa5\x8d \xe0\xa5\xa4 \\n\xe0\xa4\xa6\xe0\xa4\x95\xe0\xa5\x8d\xe0\xa4\xb7\xe0\xa4\xbf\xe0\xa4\xa3-\xe0\xa4\xaa\xe0\xa5\x82\xe0\xa4\xb0\xe0\xa5\x8d\xe0\xa4\xb5\xe0\xa4\xa4\xe0\xa4\xbf\xe0\xa4\xb0\xe0\xa4\x95\xe0\xa5\x8b&nbsp;LAL4092 \xe0\xa4\xb0 \xe0\xa4\x89\xe0\xa4\xa4\xe0\xa5\x8d\xe0\xa4\xa4\xe0\xa4\xb0-\xe0\xa4\xaa\xe0\xa4\xb6\xe0\xa5\x8d\xe0\xa4\x9a\xe0\xa4\xbf\xe0\xa4\xae\xe0\xa4\xa4\xe0\xa4\xb0\xe0\xa5\x8d\xe0\xa4\xab\xe0\xa4\x95\xe0\xa5\x8b LAL4093 \xe0\xa5\xa4</div>\\n\\n<div>\xe0\xa4\x95\xe0\xa5\x87\xe0\xa4\xb9\xe0\xa4\xbf \xe0\xa4\xb8\xe0\xa4\xae\xe0\xa4\xaf \xe0\xa4\x85\xe0\xa4\x97\xe0\xa4\xbe\xe0\xa4\xa1\xe0\xa4\xbf\xe0\xa4\xb8\xe0\xa4\xae\xe0\xa5\x8d\xe0\xa4\xae \xe0\xa4\xaf\xe0\xa4\xb8 \xe0\xa4\xab\xe0\xa4\xb2\xe0\xa5\x8d\xe0\xa4\x9a\xe0\xa4\xbe\xe0\xa4\xae\xe0\xa4\xbe \xe0\xa4\xb5\xe0\xa4\x9c\xe0\xa5\x8d\xe0\xa4\xb0\xe0\xa4\xa7\xe0\xa4\xb0\xe0\xa4\x95\xe0\xa5\x8b \xe0\xa4\xae\xe0\xa5\x82\xe0\xa4\xb0\xe0\xa5\x8d\xe0\xa4\xa4\xe0\xa4\xbf \xe0\xa4\xb0\xe0\xa4\xb9\xe0\xa5\x87\xe0\xa4\x95\xe0\xa5\x8b \xe0\xa4\x95\xe0\xa5\x81\xe0\xa4\xb0\xe0\xa4\xbe \xe0\xa4\xb8\xe0\xa5\x8d\xe0\xa4\xa5\xe0\xa4\xbe\xe0\xa4\xa8\xe0\xa5\x80\xe0\xa4\xaf\xe0\xa4\xb9\xe0\xa4\xb0\xe0\xa5\x82 \xe0\xa4\xac\xe0\xa4\xa4\xe0\xa4\xbe\xe0\xa4\x89\xe0\xa4\x9b\xe0\xa4\xa8\xe0\xa5\x8d \xe0\xa5\xa4 \xe0\xa4\xb9\xe0\xa4\xbe\xe0\xa4\xb2 \xe0\xa4\x89\xe0\xa4\x95\xe0\xa5\x8d\xe0\xa4\xa4 \xe0\xa4\xae\xe0\xa5\x82\xe0\xa4\xb0\xe0\xa5\x8d\xe0\xa4\xa4\xe0\xa4\xbf\xe0\xa4\x95\xe0\xa5\x8b \xe0\xa4\xaa\xe0\xa4\xbe\xe0\xa4\xa6\xe0\xa4\xb6\xe0\xa4\xbf\xe0\xa4\xb2\xe0\xa4\xbe\xe0\xa4\xae\xe0\xa4\xbe\xe0\xa4\xa4\xe0\xa5\x8d\xe0\xa4\xb0 \xe0\xa4\xac\xe0\xa4\xbe\xe0\xa4\x81\xe0\xa4\x95\xe0\xa5\x80 \xe0\xa4\x9b \xe0\xa5\xa4 <a href=\\"https://www.zotero.org/groups/2247442/nhdp-bibliography/items/itemKey/5A9SNX3X/q/locke\\" target=\\"_blank\\">\xe0\xa4\x9c\xe0\xa5\x8b\xe0\xa4\xa8\xe0\xa5\x8d \xe0\xa4\xb2\xe0\xa4\x95\xe0\xa5\x8d</a>\\n (\xe0\xa5\xa7\xe0\xa5\xaf\xe0\xa5\xae\xe0\xa5\xab, \xe0\xa5\xa7\xe0\xa5\xa7\xe0\xa5\xa8) \xe0\xa4\xb2\xe0\xa5\x87 \xe0\xa4\xaf\xe0\xa5\x8b \xe0\xa4\xab\xe0\xa4\xb2\xe0\xa5\x8d\xe0\xa4\x9a\xe0\xa4\xbe \xe0\xa4\xae\xe0\xa5\x82\xe0\xa4\xb0\xe0\xa5\x8d\xe0\xa4\xa4\xe0\xa4\xbf\xe0\xa4\xb5\xe0\xa4\xbf\xe0\xa4\xb9\xe0\xa4\xbf\xe0\xa4\xa8 \xe0\xa4\xb0\xe0\xa4\xb9\xe0\xa5\x87\xe0\xa4\x95\xe0\xa5\x8b \xe0\xa4\xac\xe0\xa4\xa4\xe0\xa4\xbe\xe0\xa4\x8f\xe0\xa4\x95\xe0\xa4\xbe \xe0\xa4\x9b\xe0\xa4\xa8\xe0\xa5\x8d \xe0\xa5\xa4 \xe0\xa4\xb8\xe0\xa4\xae\xe0\xa5\x8d\xe0\xa4\xad\xe0\xa4\xb5\xe0\xa4\xa4\xe0\xa4\x83 \xe0\xa4\xb8\xe0\xa5\x8b \\n\xe0\xa4\xae\xe0\xa5\x82\xe0\xa4\xb0\xe0\xa5\x8d\xe0\xa4\xa4\xe0\xa4\xbf \xe0\xa4\xb8\xe0\xa4\xa8\xe0\xa5\x8d \xe0\xa5\xa7\xe0\xa5\xaf\xe0\xa5\xae\xe0\xa5\xab \xe0\xa4\xaa\xe0\xa5\x82\xe0\xa4\xb0\xe0\xa5\x8d\xe0\xa4\xb5 \xe0\xa4\x9a\xe0\xa5\x8b\xe0\xa4\xb0\xe0\xa4\xbf\xe0\xa4\x8f\xe0\xa4\x95\xe0\xa5\x8b \xe0\xa4\xb9\xe0\xa5\x81\xe0\xa4\xa8\xe0\xa5\x81\xe0\xa4\xaa\xe0\xa4\xb0\xe0\xa5\x8d\xe0\xa4\xa6\xe0\xa4\x9b \xe0\xa5\xa4 \xe0\xa4\xaa\xe0\xa4\xbe\xe0\xa4\xa6\xe0\xa4\xb6\xe0\xa4\xbf\xe0\xa4\xb2\xe0\xa4\xbe\xe0\xa4\x95\xe0\xa5\x8b \xe0\xa4\xaa\xe0\xa5\x80\xe0\xa4\xa0\xe0\xa4\xad\xe0\xa4\xbe\xe0\xa4\x97\xe0\xa4\xae\xe0\xa4\xbe \xe0\xa4\xb8\xe0\xa4\x82\xe0\xa4\xb8\xe0\xa5\x8d\xe0\xa4\x95\xe0\xa5\x83\xe0\xa4\xa4 \\n\xe0\xa4\xad\xe0\xa4\xbe\xe0\xa4\xb7\xe0\xa4\xbe\xe0\xa4\xae\xe0\xa4\xbe \xe0\xa4\xb2\xe0\xa5\x87\xe0\xa4\x96\xe0\xa4\xbf\xe0\xa4\x8f\xe0\xa4\x95\xe0\xa5\x8b \xe0\xa4\xa4\xe0\xa5\x80\xe0\xa4\xa8 \xe0\xa4\xaa\xe0\xa4\x99\xe0\xa5\x8d\xe0\xa4\x95\xe0\xa5\x8d\xe0\xa4\xa4\xe0\xa4\xbf\xe0\xa4\x95\xe0\xa5\x8b \xe0\xa4\x85\xe0\xa4\xad\xe0\xa4\xbf\xe0\xa4\xb2\xe0\xa5\x87\xe0\xa4\x96 \xe0\xa4\x9b \xe0\xa5\xa4 \xe0\xa4\xaf\xe0\xa5\x8b \xe0\xa4\xab\xe0\xa4\xb2\xe0\xa5\x8d\xe0\xa4\x9a\xe0\xa4\xbe\xe0\xa4\x95\xe0\xa5\x8b \xe0\xa4\x85\xe0\xa4\xb5\xe0\xa4\xb8\xe0\xa5\x8d\xe0\xa4\xa5\xe0\xa4\xbe \xe0\xa4\xb8\xe0\xa4\xbe\xe0\xa4\xb9\xe0\xa5\x8d\xe0\xa4\xb0\xe0\xa5\x88 \xe0\xa4\xa8\xe0\xa4\xbe\xe0\xa4\x9c\xe0\xa5\x81\xe0\xa4\x95 \xe0\xa4\x9b\\n \xe0\xa5\xa4 &nbsp;\xe0\xa4\xb9\xe0\xa4\xbe\xe0\xa4\xb2 \xe0\xa4\xaf\xe0\xa4\xb9\xe0\xa4\xbe\xe0\xa4\x81 \xe0\xa4\xa8\xe0\xa4\x9c\xe0\xa4\xbf\xe0\xa4\x95\xe0\xa5\x88\xe0\xa4\x95\xe0\xa5\x8b \xe0\xa4\x98\xe0\xa4\xb0 \xe0\xa4\xac\xe0\xa4\xa8\xe0\xa4\xbe\xe0\xa4\x89\xe0\xa4\xa8 \xe0\xa4\xaa\xe0\xa5\x8d\xe0\xa4\xb0\xe0\xa4\xaf\xe0\xa5\x8b\xe0\xa4\x97 \xe0\xa4\xad\xe0\xa4\x8f\xe0\xa4\x95\xe0\xa5\x8b \xe0\xa4\xa8\xe0\xa4\xbf\xe0\xa4\xb0\xe0\xa5\x8d\xe0\xa4\xae\xe0\xa4\xbe\xe0\xa4\xa3-\xe0\xa4\xb8\xe0\xa4\xbe\xe0\xa4\xae\xe0\xa4\x97\xe0\xa5\x8d\xe0\xa4\xb0\xe0\xa5\x80\xe0\xa4\xb9\xe0\xa4\xb0\xe0\xa5\x82 \xe0\xa4\xa5\xe0\xa5\x81\xe0\xa4\xaa\xe0\xa4\xbe\xe0\xa4\xb0\xe0\xa4\xbf\xe0\xa4\x8f\xe0\xa4\x95\xe0\xa5\x8b \xe0\xa4\x9b\\n \xe0\xa5\xa4</div></dd><dt><img class=\\"img-responsive\\" data-bind=\\"attr: {src: url, alt: name}\\" src=\\"https://nhdp-test.kjc.uni-heidelberg.de/files/uploadedfiles/LAL4093_P_20190516_01_0GtS6uP.JPG\\" alt=\\"LAL4093_P_20190516_01_0GtS6uP.JPG\\"></dt></dl></div>", "xml:lang": "EN"}, "altlabel": {"type": "literal", "value": "\xe0\xa4\x98\xe0\xa4\xa8 \xe0\xa4\xac\xe0\xa4\xbe\xe0\xa4\xb9\xe0\xa4\xbe\xe0\xa4\x83 ", "xml:lang": "NP"}}, {"label": {"type": "literal", "value": "Ghanbaha", "xml:lang": "EN"}, "definition": {"type": "literal", "value": "<div>Vajradhara Phalc\xc4\x81 is in an advanced state of decay. It retains many \\noriginal components such as simply carved pillars, a traditional shrine \\nwith a historic carved door and is covered with&nbsp;<em>jingati</em>&nbsp;roof \\ntiles. The ridge tiles have been replaced with plain brick and the roof \\ndisplays many leaks. The platform\xe2\x80\x99s stone edge on the east side is \\npreserved but the tile paving badly damaged. The entry door from the \\neast has been replaced with a metal-coverd frame.</div>", "xml:lang": "EN"}, "altlabel": {"type": "literal", "value": "\xe0\xa4\x98\xe0\xa4\xa8 \xe0\xa4\xac\xe0\xa4\xbe\xe0\xa4\xb9\xe0\xa4\xbe\xe0\xa4\x83 ", "xml:lang": "NP"}}]}, "head": {"vars": ["definition", "label", "altlabel"]}}';

            //var obj = $.parseJSON(txt)
            //alert(obj.results.bindings[0].definition.value);
            //alert(JSON.stringify(data));

            for (i = 0; i < data.length; i++) {
                /*---------- vertical layout--------------------------------------------
                $(".details").append('<p><b>Anglicized term: </b>' + data.results.bindings[i].label.value + '</p>');
                $(".details").append('<p><b>Nepali term: </b>' + data.results.bindings[i].altlabel.value + '</p>');
                $(".details").append('<p><b>Definition: </b></p>');
                $(".details").append('<p>' + data.results.bindings[i].definition.value + '</p>');
                 */
                //------------------------- horizontal layout--------------------------

                if (data[i].image_Main && data[i].image_Main === true){
                    var general_head = "<tr><td><a href='../meaning/" + data[i].uuid +
                        "' target='_blank'>" + data[i].prefLabel + "</a></td><td>" + data[i].altLabel + "</td><td>" +
                        data[i].definition + "</td><td><a href='" + data[i].Image + "' target='_blank'><img class = 'thumb' src='"
                         + data[i].thumb + "' height='75px'></a></img><br>"
                         + "<a href='https://heidicon.ub.uni-heidelberg.de/detail/" + data[i].heidicon
                         + "' target='_blank'><font color='blue' size='1px'>open in heidICON....</font></a>";
                } else {

                    var general_head = "<tr><td><a href='../meaning/" + data[i].uuid +
                        "' target='_blank'>" + data[i].prefLabel + "</a></td><td>" + data[i].altLabel + "</td><td>" +
                        data[i].definition + "</td><td>";

                }

                var general_tail = "</td></tr>";

                var view = "";

                if (user_name == 'anonymous') {
                    view = general_head + general_tail;
                } else {
                    var new_text = data[i].definition.replace(/'/g, "u0027");
                    //console.log(new_text);
                    var edit_view = "<td><b><font color='red' size='1px'><span class = 'del' val = '"
                         + data[i].uuid + "' eng_val='"
                         + data[i].prefLabel + "'>remove</font></span><hr>"
                          + "<font color='#4d79ff' size='1px'><a href='/glossary/modify-term/" + data[i].uuid + "' target='_blank'>modify</font></a>"
						 
						 //+ "<font color='#4d79ff' size='1px'><span class='update' uuid='"
                         //+ data[i].uuid + "' eng='"
                         //+ data[i].prefLabel + "' nep='"
                         //+ data[i].altLabel + "' thumb='"
                         //+ data[i].thumb + "' heidicon='"
                         //+ data[i].heidicon + "' imag='"
                         //+ data[i].Image + "' defn='"
                         //+ new_text + "'>modify</span></font></b>";

                    view = general_head + edit_view + general_tail;
                }
                //console.log(view);


                /*
                var admin_view = "<tr><td><a href='../meaning/" + data.results.bindings[i].label.value +
                "' target='_blank'>" + data.results.bindings[i].label.value + "</a></td><td>" + data.results.bindings[i].altlabel.value + "</td><td>" +
                data.results.bindings[i].definition.value + "</td><td><img src='" + data.results.bindings[i].it.value + "' height='75px'></img><br>"
                + "<a href='" + data.results.bindings[i].img.value + "' target='_blank'><font color='blue' size='1px'>enlarge</font></a><br>"
                + "<a href='https://heidicon.ub.uni-heidelberg.de/detail/" + data.results.bindings[i].heidicon.value
                + "' target='_blank'><font color='blue' size='1px'>link to heidICON</font></a>"
                + "</td><td><b><font color='red' size='1px'><span class = 'del' val = '"
                + data.results.bindings[i].concept.value + "'>remove</font></span><hr>"
                + "<font color='#4d79ff' size='1px'><span class='update' uuid='"
                + data.results.bindings[i].concept.value + "' eng='"
                + data.results.bindings[i].label.value + "' nep='"
                + data.results.bindings[i].altlabel.value + "' thumb='"
                + data.results.bindings[i].it.value + "' heidicon='"
                + data.results.bindings[i].heidicon.value + "' imag='"
                + data.results.bindings[i].img.value + "' defn='"
                + data.results.bindings[i].definition.value + "'>modify</span></font></b></td></tr>"
                 */
                $("table").append(view);
                $(".loader").remove();

            }
            $(".listTable").DataTable({
                "sDom": ' <"search"f><"top"l>rt<"bottom"ip><"clear">',
                "search": {
                    "regex": true
                },
                "pagingType": "full_numbers",
                "sPaginationType": "bootstrap",
                "aoColumnDefs": [{
                        "bSortable": false,
                        "aTargets": [-1, -2]

                    }
                ],
                "aLengthMenu": [[5, 10, 15, 20, 25, -1], [5, 10, 15, 20, 25, "All"]],
                "iDisplayLength": -1,
            });
            $(".dataTable_length").addClass("bs_select");
            //alert(obj);
            //for (i= 0; i < data.length; i++){
            //

            //}
            $('.del').on("click", function () {
                //alert('the intention here is to delete ' + $(this).attr('val'));
                var response;
                if (confirm("This will remove " + $(this).attr('eng_val') + " from the glossary.")) {
                    $.ajax({
                        type: "POST",
                        url: "/glossary/remove/",
                        dataType: 'json',
                        data: {
                            "delete": $(this).attr('val'),
                            "eng": $(this).attr('eng_val')
                        },
                        success: function (data) {
                            alert(data.message);
                            location.reload(true);
                        }
                    });
                }
            });
            $('.update').on("click", function () {

                //window.open("/glossary/upload/" + $(this).attr('uuid') + "/"  + $(this).attr('eng')
                //			+ "/"  + $(this).attr('nep')
                //			+ "/"  + $(this).attr('defn'));

                $.ajax({
                    type: "POST",
                    url: "/glossary/upload/",
                    dataType: 'json',
                    data: {
                        "uuid": $(this).attr('uuid'),
                        "eng": $(this).attr('eng'),
                        "nep": $(this).attr('nep'),
                        "imag": $(this).attr('imag'),
                        "thumb": $(this).attr('thumb'),
                        "heidicon": $(this).attr('heidicon'),
                        "def": $(this).attr('defn')
                    },
                    success: function (data) {
						

                        window.open("/glossary/update/");
                    }
                });
            });

        }
    });
    //CSRF code
    function getCookie(name) {
        var cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = cookies[i].trim();
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
    var csrftoken = getCookie('csrftoken');
    function csrfSafeMethod(method) {
        // these HTTP methods do not require CSRF protection
        return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
    }
    $.ajaxSetup({
        beforeSend: function (xhr, settings) {
            if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
                xhr.setRequestHeader("X-CSRFToken", csrftoken);
            }
        }
    });
});
