function generate_report_dialog(e){"undefined"==typeof dui?$.getScript("/js/ui/dialog.js",function(){_generate_report_dialog(e)}):_generate_report_dialog(e)}function _generate_report_dialog(e){function t(e){return e.test(location.pathname)}function o(e){return e.test(location.pathname)}var i="8",n=e.type||"";n||(n="content",o(/^\/(subject|game|app)\/\w+/)||t(/movie|music|book/)?n="subject":o(/^\/people\/\w+\/?$/)?n="account":o(/^\/people\/\w+\/status\/\w+\/?$/)&&(n="comment")),n=n instanceof Array?n.join(","):n;var r='<span class="up">举报已提交</span>',a="http://help.douban.com/help/ask",d="/j/misc/report_form?type="+n,l="/misc/audit_report",p='<span>为了便于工作人员进行受理，请您通过<a target="_blank" href="'+a+'">豆瓣帮助中心</a>详细描述内容</span>',c="<h3>提交详细信息</h3>",u=e.report_url?e.report_url:location.href,s=e.reason?e.reason:0,f="#report_value input[type=radio]:checked",h=dui.Dialog({title:e.title?e.title:"选择举报原因",url:e.url?e.url:d,width:e.width?e.width:380,cls:e.cls?e.cls:"report-dialog"});h.report_url=u,h.is_report_dlg_singleton||(h.body.delegate(".btn-report","click",function(){if(s=$(f).val(),"other"==s)h.node.find(".hd").html(c),h.node.find(".bd").html(p),h.update(),h.body.delegate(".bd a","click",function(){h.close()});else{var e="",t="",o=$(".victim-form .victim-msg").hide();if(s===i&&(e=$("#report_value .victim-input").val()||"",e?e.length>100&&(t="被冒充帐号 id 最多不能超过 100 个字符"):t="被冒充帐号 id 不能为空",t))return o.text(t).show(),void h.update();$.post_withck(l,{url:h.report_url,reason:s,extra_msg:e},function(){h.node.find(".hd").hide(),h.node.find(".bd").html(r),h.update(),setTimeout(function(){h.close()},1e3)})}}),h.is_report_dlg_singleton=!0),h.open(),h.body.delegate("input[type=radio]","click",function(){var e=$(f).val();e===i?h.node.find(".victim-form").show():h.node.find(".victim-form").hide(),h.update()}),h.node.find(".hd").show(),h.update()}